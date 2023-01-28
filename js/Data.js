let shopItemsData = [
  {
    id: "chuykc",
    name: "NHẪN NAM CHÙY KIM CANG VÀNG 18K",
    price: 46660000,
    desc: `
    Nhẫn Nam Chùy Kim Cang Vàng 18K<br>
    Mã Sản Phẩm: V000001<br>
    – Thương hiệu: Viễn Chí Bảo<br>
    – Dòng sản phẩm: Nhẫn<br>
    – Bộ sưu tập: Vàng phong thủy, Chùy kim cang<br>
    – Dịp tặng quà: Ngày kỷ niệm, các dịp lễ tết, sinh nhật, tình yêu, ...<br>
    – Chất Liệu: Vàng 18K<br>
    – Kích thước: 23,5 x 18,5 x 2,7mm<br>
    – Trọng lượng: 16,05g`,
    img: "./images/chuykc01.jpg",
  }
/*  ,
  {
    id: "vangnu",
    name: "NHẪN VÀNG NỮ CHẤT LIỆU VÀNG 10K",
    price: 490000,
    desc: "Dòng sản phẩm: Nhẫn",
    img: "images/vangnu01.jpg",
  }
*/
];

let numbWithComma = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
