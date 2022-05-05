import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaCartPlus } from 'react-icons/fa';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import callAPI from "call";
import { Modal, Form, Input } from "components";
import storage from "helpers/storage";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { asyncGetUser } from "store/initActions";
import { MENU } from "./const";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FB_ID, GG_ID } from "constant";

interface Header {
    menu?: { [k: string]: any }[]
}
const Header: FC<Header> = ({ menu }) => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)
    const popoverRef = useRef<any>()
    const [ShowModalLogin, setShowModalLogin] = useState(false)
    const [ShowModalSignup, setShowModalSignup] = useState(false)
    const [ShowMenu, setShowMenu] = useState(false)
    const [ShowPopover, setShowPopover] = useState(false)
    const handleLogin = async (data: any) => {
        const res = await callAPI.post('/auth', { ...data })
        if (res.msg === 'not existed' || res.msg === 'not valid email' || res.status === 100) return toast('Email hoặc mật khẩu không chính xác')

        if (res.status === 1) toast("Đăng nhập thành công")
        setShowModalLogin(false)
        storage.setToken(res.token)
        dispatch(asyncGetUser())
    }

    const handleSignup = async (data: any) => {
        if (data.password !== data.repassword) {
            return toast('Nhập lại mật khẩu không khớp')
        }
        const res = await callAPI.post('/user', data)
        if (res.msg === 'not valid email') return toast('Email không hợp lệ')
        if (res.msg === 'wrong length') return toast('Mật khẩu phải từ 6-18 kí tự')
        if (res.msg === 'existed') return toast('Email đã được sử dụng')
        if (res.status === 1) toast('Đăng ký thành công')
        setShowModalSignup(false)
        setShowModalLogin(true)
    }

    useEffect(() => {
        const toggle = event => {
            if (!event.path.includes(popoverRef.current)) {
                setShowPopover(false)
            }
        }
        window.addEventListener('click', toggle)
        return () => {
            window.removeEventListener('click', toggle)
        }
    }, [])
    const responseFacebook = value => {
        handleLogin({ email: value.email, isFB: true, name: value.name, id: value.id })
    }

    const responseGoogle = value => {
        if (value.error) {
            return toast('Đăng nhập bằng google không thành công')
        }

        const email = value.profileObj.email
        const name = (value?.profileObj?.familyName || '') + (value?.profileObj?.givenName || '')
        const id = value.googleId
        handleLogin({
            email,
            name,
            id,
            isGoogle: true
        })
    }
    return (
        <>
            <Modal show={ShowModalLogin} onClose={() => setShowModalLogin(false)} >
                <Form onSubmit={handleLogin}>
                    <div className="title">Đăng nhập</div>
                    <Input name="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Mật khấu" />
                    <button className="button highlight">Đăng nhập</button>
                    <FacebookLogin
                        appId={FB_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook} />

                    <div className="google-login">
                        <GoogleLogin
                            clientId={GG_ID}
                            buttonText="LOGIN WITH GOOGLE "
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />
                    </div>
                </Form>
            </Modal>
            <Modal show={ShowModalSignup} onClose={() => setShowModalSignup(false)} >
                <Form onSubmit={handleSignup}>
                    <div className="title">Đăng ký</div>
                    <Input name="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Mật khấu" />
                    <Input name="repassword" type="password" placeholder="Nhập lại mật khấu" />
                    <button className="button highlight">Đăng ký</button>
                </Form>
            </Modal>
            <header className={`${ShowMenu ? 'show' : ''}`}>
                <div onClick={() => setShowMenu(!ShowMenu)} className="toggle"><AiOutlineMenu /></div>
                <div className="container">
                    <div onClick={() => setShowMenu(false)} className={`mask ${ShowMenu ? 'show' : ''}`}></div>
                    <div className={`header ${ShowMenu ? 'show' : ''}`}>
                        <div onClick={() => setShowMenu(false)} className="close"><AiOutlineClose /></div>
                        <div className="menu">
                            <ul>
                                {
                                    MENU.map(o => <li key={o.text}>
                                        <Link href={o.link}>
                                            <a>{o.text}</a>
                                        </Link>
                                    </li>)
                                }
                                {
                                    menu?.map(o => <li key={o._id}>
                                        <Link href={`/${o.type === 1 ? 'product' : 'news'}/${o.slug}`}>
                                            <a>{o.name}</a>
                                        </Link>
                                        <ul>
                                            {
                                                o.child?.map(child => <li key={child._id}>
                                                    <Link href={`/${child.type === 1 ? 'product' : 'news'}/${child.slug}`}>
                                                        <a>{child.name}</a>
                                                    </Link>
                                                </li>)
                                            }
                                        </ul>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {!user && <div className="profile">
                            <div onClick={() => setShowModalLogin(true)} className="button">Đăng nhập</div>
                            <div onClick={() => setShowModalSignup(true)} className="button highlight">Đăng ký</div>
                        </div>}
                        {
                            user && <div ref={popoverRef} onClick={() => setShowPopover(!ShowPopover)} className="profile loged">
                                <div className="name">{user.email}</div>
                                <div className="icon"> <FontAwesomeIcon icon={faUser} /></div>
                                <div className={`popover ${ShowPopover ? 'show' : ''} `}>
                                    <ul>
                                        <li>
                                            <Link href='/cart'><a> Giỏ hàng</a></Link>
                                        </li>
                                        <li>
                                            <Link href='/history'><a>Đơn hàng</a></Link>
                                        </li>
                                        <li>
                                            <Link href='/profile'><a>Thông tin cá nhân</a></Link>
                                        </li>
                                        <li onClick={() => {
                                            storage.clearToken()
                                            window.open('/', "_self")
                                        }}>
                                            Đăng xuất
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <Link href="/cart">
                            <a className="cart">
                                <FaCartPlus />
                            </a>
                        </Link>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header