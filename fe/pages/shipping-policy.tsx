import type { NextPage } from 'next'
import Head from 'next/head'
import {Home, Upload} from 'pages'
const App: NextPage = () => {
  return (

    <>
    <Head>
        <title>Chính sách vận chuyển</title>
    </Head>
    <div className="container mt-30">
      <div className="title">CHÍNH SÁCH VẬN CHUYỂN</div>
      <p>1. PHÍ VẬN CHUYỂN:</p>
      <p>Hiện nay, Pluzzle đang áp dụng mức phí vận chuyển 30k cho mỗi đơn hàng đặt trên các trang mạng xã hội trực thuộc Pluzzle quản lý.</p>
      <p>Sản phẩm của Pluzzle từ miếng ghép hình đến hộp đựng đều làm từ gỗ. Chính vì vậy, mỗi bộ xếp hình gỗ của Pluzzle đều có khối lượng không hề nhỏ, ảnh hưởng không nhỏ tới phí ship. Để giúp khách hàng mua với giá hợp lý nhất, Pluzzle đã hỗ trợ 15% phí ship cho mỗi đơn hàng. Hy vọng khách hàng khi đặt mua sản phẩm của chúng mình sẽ thông cảm và vui vẻ nhận phí ship bên mình đã thông báo.</p>
      <p>2. THỜI GIAN VẬN CHUYỂN:</p>
      <p>+ Vận chuyển tiêu chuẩn: Từ 3-5 ngày kể từ ngày đặt hàng</p>
      <p>+ Vận chuyển nhanh: vận chuyển ngay trong ngày. Chỉ áp dụng với các quận Thanh Xuân, Đống Đa, Cầu Giấy, Nam Từ Liêm, Hà Đông, Hoàn Kiếm, Ba Đình (Hà Nội). Phí ship nhanh không cố định, khách hàng có trách nhiệm thanh toán toàn bộ phí ship nhanh do bên vận chuyển đưa ra.</p>
      <p>3. RỦI RO SHIP TRỄ:</p>
      <p>Tùy thuộc vào tình trạng sản xuất hoặc những sự cố ngoài mong muốn trong quá trình vận chuyển, sản phẩm có thể đến trễ với thời gian hẹn khoảng 3-5 ngày. Khi có những thay đổi về thời gian vận chuyển, Pluzzle sẽ liên hệ ngay với khách hàng để khách hàng nắm bắt thông tin.</p>
      <p>4. MIỄN SHIP VỚI SẢN PHẨM CUSTOM:</p>
      <p>Pluzzle miễn ship cho tất cả các đơn hàng Custom (in ấn theo yêu cầu). Tuy nhiên khách hàng sẽ phải thanh toán trước sản phẩm theo thông tin thanh toán.</p>
      <p>5. LƯU Ý:</p>
      <p>Pluzzle chỉ nhận vận chuyển sản phẩm trong giờ hành chính, không vận chuyển ngoài giờ hoặc cuối tuần kể cả các đơn vận chuyển nhanh.</p>
    </div>
    </>
  )
}

export default App
