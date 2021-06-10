import React from 'react';
import { Typography } from 'antd';
import { Link, FormattedMessage } from 'umi';
import moment from 'moment';

const { Paragraph } = Typography;

// {
//   id: 1000805803,
//     handle: 'ban-hang-cung-gunshop',
//   title: 'Bán hàng cùng Gunshop',
//   shortcontent:
//   'Bạn có một thương hiệu của riêng mình và muốn mọi người biết đến? Bạn không đủ chi phí quảng cáo sản phẩm nhưng muốn có doanh số? ',
//     authorname: '',
//   updated_at: '2021-02-24T08:30:18.723Z',
//   author: null,
//   created_at: '2019-04-02T10:00:54.438Z',
//   published_at: '2019-04-02T09:50:22.134Z',
//   content:
//   '<p><img alt="ban-hang-cung-gunshop" style="display: block; margin-left: auto; margin-right: auto;" src="https://file.hstatic.net/1000343028/file/business_camera_coffee_1509428_11d430047cca4d79af4c3fe893ae9673_2048x2048.jpg"></p><p><span style="font-size:12pt">Bạn có một thương hiệu của riêng mình và muốn mọi người biết đến? Bạn không đủ chi phí quảng cáo sản phẩm nhưng muốn có doanh số? Bạn cần một người đồng hành uy tín? Hay bạn đã có thương hiệu và muốn mở rộng thị trường? Tất cả điều bạn cần đều ở ngay đây.</span></p><p style="text-align: justify;"><span style="font-size:15pt"><strong>Tại sao bạn nên hợp tác cùng Gunshop?</strong></span></p><p style="text-align: justify;"><span style="font-size:12pt">Được thành lập từ năm 2012, <strong>Gunshop</strong> nhanh chóng trở thành thương hiệu đi đầu trong ngành dụng cụ y tế về hỗ trợ tình dục trên thị trường Việt Nam. Gunshop<strong>&nbsp;</strong>xây dựng một hệ sinh thái bán hàng online trên website: <strong>gunshop.vn</strong>, không chỉ là bán hàng Gunshop còn chăm sóc khách hàng. Hệ thống website thân thiện với người dùng cùng sự đa dạng về hàng hóa, mẫu mã, chất lượng, Gunshop tự hào luôn là nơi lựa chọn tin cậy cho khách hàng.</span></p><p style="text-align: justify;"><span style="font-size:12pt">Với sứ mệnh thống lĩnh thị trường Gunshop không ngừng cải thiện và phát triển về tất cả mọi phương diện từ cửa hàng, website cho đến nhân lực để có thể phục vụ khách hàng một cách hoàn mĩ nhất.</span></p><p style="text-align: justify;"><span style="font-size:15pt"><strong>Lợi ích khi hợp tác cùng Gunshop?</strong></span></p><p style="text-align: justify;"><span style="font-size:12pt">Sở hữu lượng khách hàng lớn mỗi ngày, thương hiệu của bạn sẽ dễ dàng được tiếp cận với thị trường mà không mất thêm bất kì một khoảng chi phí quảng bá nào. Đồng thời, hợp tác cùng Gunshop chính là sự mở rộng thị trường mà cả bạn và <strong>Gunshop</strong> đều nhắm đến. Với đội ngũ thiết kế xây dựng hình ảnh, nội dung dày dặn kinh nghiệm, Gunshop chắc chắn mang đến một hình ảnh chuyên nghiệp nhất cho sản phẩm cũng như thương hiệu của bạn một khi chúng ta hợp tác cùng nhau.</span></p><p style="text-align: justify;"><span style="font-size:12pt">Mọi thông tin chi tiết bạn vui lòng liên hệ về số điện thoại&nbsp;<strong>0902 756 705 (Mr.Nam).</strong></span></p><p style="text-align: justify;"><span style="font-size:12pt">Địa chỉ website: <a href="https://gunshop.vn/"><strong>g</strong><strong>unshop.vn</strong></a>.</span></p><p style="text-align: justify;"><span style="font-size:12pt">Văn phòng công ty tại số 111/121 đường Trục, phường 13, quận Bình Thạnh, thành phố Hồ Chí Minh.</span></p>',
//     storeid: 1000343028,
//   template_suffix: '',
//   isVisible: true,
// },

const columns = [
  {
    title: <FormattedMessage id={'pages.title'} />,
    key: 'title',
    render: ({ id, title, shortContent }) => (
      <Link to={`/admin/pages/${id}`}>
        {title}
        <Paragraph ellipsis={{ rows: 1 }} style={{ marginBottom: 0 }}>
          {shortContent}
        </Paragraph>
      </Link>
    ),
  },
  {
    title: <FormattedMessage id={'pages.date'} />,
    key: 'published_at',
    dataIndex: 'published_at',
    width: 130,
    render: (text) => moment(text).format('DD/MM/YYYY'),
  },
];

export default columns;
