import { FC } from "react";
import Iframe from 'react-iframe'
import { FiUpload, FiPhone, FiShoppingCart } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-default">
          <div className="container">
            <div className="flexbox">
              <div className="col-4">
                <p className="footer-default__header">DECORNOW</p>
                <p className="footer-default__col-1--license">
                  Giấy phép đăng ký kinh doanh số 41L8031928 do UBND Quận 12 cấp ngày 25/02/2021
                </p>
                <ul>
                  <li>
                    <span><GoLocation /></span>
                    <span>
                      Tòa nhà Thái An, 2290 Quốc Lộ 1A, phường Trung Mỹ Tây,
                      Quận 12, TP. Hồ Chí Minh
                    </span>
                  </li>
                  <li>
                    <span><FiPhone /></span>
                    <span>
                      032 888 9398
                    </span>
                  </li>
                  <li>
                    <span><AiOutlineMail /></span>
                    <span>contact@decornow.vn</span>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <p className="footer-default__header">Trang</p>
                <ul>
                  <li><Link href="/upload">Thiết kế</Link></li>
                  <li><Link href="/cart">Giỏ Hàng</Link></li>
                </ul>
              </div>

              <div className="col-4">
                <p className="footer-default__header text-left">Chính sách</p>
                <ul>
                  <li><Link href="/shipping-policy">Chính sách vận chuyển</Link></li>
                  <li><Link href="/refund">Chính sách đổi trả và bảo hành</Link></li>
                  <li><Link href="/payment">Chính sách thanh toán và bảo mật</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer