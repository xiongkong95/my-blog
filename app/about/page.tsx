"use client";

import { useLanguage } from "../language-context";

export default function AboutPage() {
  const { language } = useLanguage();
  const isLao = language === "lo";

  return (
    <article className="article-panel">
      <p className="eyebrow">{isLao ? "ກ່ຽວກັບຂ້ອຍ" : "ABOUT ME"}</p>
      <h1 className="page-title">ກົ້ງເມັ່ງຊົ່ງ ຢົ້ວນູ</h1>
      <p className="article-lead">
        {isLao
          ? "ຜູ້ປະກອບການທີ່ມີວິໄສທັດ ເເລະ ສົນໃຈໃນການສ້າງສິ່ງໃໝ່ໆ ແລະ ພັດທະນາແນວຄິດໃຫ້ເປັນຈິງ."
          : "An entrepreneur and visionary passionate about creating new things and turning ideas into reality."}
      </p>
      <div className="article-divider" />
      <p className="article-copy">
        {isLao
          ? "ປັດຈຸບັນດຳລົງຕຳແໜ່ງເປັນຜູ້ນຳ ບໍລິສັດ ເເອລຊີໂອ ອະສັງຫາລິມະຊັບ ຈຳກັດຜູ້ດຽວ, ຂັບເຄື່ອນທັງທຸລະກິດອະສັງຫາລິມະຊັບ ແລະ ການພັດທະນາຊອບແວສະໄໝໃໝ່. ມີຄວາມສົນໃຈໃນການສ້າງແພລດຟອມດິຈິຕອນ, ການຮຽນຮູ້ເຕັກໂນໂລຊີໃໝ່ໆ ແລະ ກິດຈະກຳທີ່ສ້າງປະໂຫຍດໃຫ້ສັງຄົມ."
          : "I lead LCO, working across real estate and modern software development. I am passionate about building digital platforms, learning emerging technologies, and supporting activities that benefit the community."}
      </p>
      <div className="about-details">
        <div>
          <span className="detail-label">{isLao ? "ສິ່ງທີ່ສົນໃຈ" : "FOCUS"}</span>
          <span>{isLao ? "ທຸລະກິດ · ເຕັກໂນໂລຊີ" : "Business · Technology"}</span>
        </div>
        <div>
          <span className="detail-label">{isLao ? "ເບີໂທຕິດຕໍ່" : "PHONE"}</span>
          <a href="tel:+8562078964163">020 78964163</a>
        </div>
        <div className="about-location">
          <span className="detail-label">{isLao ? "ສະຖານທີ່" : "LOCATION"}</span>
          <span>
            {isLao
              ? "ບ້ານ ນາສ້ຽວ, ເມືອງ ນາຊາຍທອງ, ນະຄອນຫຼວງວຽງຈັນ"
              : "Nasiao Village, Naxaythong District, Vientiane Capital, Laos"}
          </span>
        </div>
      </div>
    </article>
  );
}