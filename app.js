// Presentation Data and Application Logic for SSRU CE Slides App

const PRESENTATION_DATA = {
  "teachers": {
    "dept": [
      {
        "name": "ผู้ช่วยศาสตราจารย์ ดร.ขวัญเรือน รัศมี",
        "role": "หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์",
        "image": "teacher_data/อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์/ผู้ช่วยศาสตราจารย์ ดร.ขวัญเรือน รัศมี/aj_kwanruan.png",
        "details": "ดูแลการบริหารงานของสาขาวิชาวิศวกรรมคอมพิวเตอร์ พัฒนาหลักสูตรและส่งเสริมความเป็นเลิศทางวิชาการและวิชาชีพของนักศึกษา มุ่งสู่การปฏิบัติงานจริงในอุตสาหกรรมยุคดิจิทัล"
      },
      {
        "name": "ผู้ช่วยศาสตราจารย์ ดร.พรภวิษย์ บุญศรีเมือง",
        "role": "อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์",
        "image": "teacher_data/อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์/ผู้ช่วยศาสตราจารย์ ดร.พรภวิษย์ บุญศรีเมือง/aj_pornpawit.jpg",
        "details": "ผู้เชี่ยวชาญด้านระบบเครือข่ายคอมพิวเตอร์ การสื่อสารข้อมูล และโครงสร้างพื้นฐานไอที มุ่งเน้นการวิจัยพัฒนาด้านระบบการเรียนรู้แบบสมาร์ท"
      },
      {
        "name": "ผู้ช่วยศาสตราจารย์ ดร.รวิ อุตตมธนินทร์",
        "role": "อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์",
        "image": "teacher_data/อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์/ผู้ช่วยศาสตราจารย์ ดร.รวิ อุตตมธนินทร์/aj_ravi.jpg",
        "details": "ผู้เชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์ ฐานข้อมูล และการออกแบบระบบคลาวด์ สนับสนุนการพัฒนานักศึกษาสู่การเป็นนักพัฒนาระดับมืออาชีพ"
      },
      {
        "name": "อาจารย์ กานต์ เจริญจิตร",
        "role": "อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์",
        "image": "teacher_data/อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์/อาจารย์ กานต์ เจริญจิตร/aj_kant.png",
        "details": "ผู้เชี่ยวชาญด้านไมโครคอนโทรลเลอร์, IoT (Internet of Things), ระบบสมองกลฝังตัว และระบบควบคุมอัตโนมัติ มุ่งเน้นงานบริการวิชาการเพื่อพัฒนาชุมชนและสังคม"
      }
    ],
    "curriculum": [
      {
        "name": "ผู้ช่วยศาสตราจารย์ ดร.เศรษฐกาล โปร่งนุช",
        "role": "อาจารย์ผู้สอนประจำหลักสูตร",
        "dept": "สาขาวิชาวิศวกรรมหุ่นยนต์",
        "faculty": "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม",
        "image": "teacher_data/อาจารย์ผู้สอนประจำหลักสูตร/ผู้ช่วยศาสตราจารย์ ดร.เศรษฐกาล โปร่งนุช/aj_settakal.png",
        "details": ""
      },
      {
        "name": "อาจารย์ ดร.ธัชนนท์ ชุ่มแอ่น",
        "role": "อาจารย์ผู้สอนประจำหลักสูตร",
        "dept": "สาขาวิชาเทคโนโลยีไฟฟ้า",
        "faculty": "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม",
        "image": "teacher_data/อาจารย์ผู้สอนประจำหลักสูตร/อาจารย์ ดร.ธัชนนท์ ชุ่มแอ่น/aj_thatchanon.png",
        "details": ""
      },
      {
        "name": "อาจารย์ ดร.พงศ์ระพี แก้วไทรฮะ",
        "role": "อาจารย์ผู้สอนประจำหลักสูตร",
        "dept": "สาขาวิชาการจัดการวิศวกรรม",
        "faculty": "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม",
        "image": "teacher_data/อาจารย์ผู้สอนประจำหลักสูตร/อาจารย์ ดร.พงศ์ระพี แก้วไทรฮะ/aj_pongrapee.png",
        "details": ""
      },
      {
        "name": "อาจารย์ณรงค์ ณรงค์รัตน์",
        "role": "อาจารย์ผู้สอนประจำหลักสูตร",
        "dept": "สาขาวิชาเทคโนโลยีไฟฟ้า",
        "faculty": "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม",
        "image": "teacher_data/อาจารย์ผู้สอนประจำหลักสูตร/อาจารย์ณรงค์ ณรงค์รัตน์/aj_narong.jpg",
        "details": ""
      },
      {
        "name": "อาจารย์ภูภัศ ปภาณ์ณภาภูมิษ์",
        "role": "อาจารย์ผู้สอนประจำหลักสูตร",
        "dept": "สาขาวิชาการจัดการวิศวกรรม",
        "faculty": "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม",
        "image": "teacher_data/อาจารย์ผู้สอนประจำหลักสูตร/อาจารย์ภูภัศ ปภาณ์ณภาภูมิษ์/aj_phuphat.png",
        "details": ""
      }
    ]
  },
  "events": [
     {
            "year": "2025",
            "name": "superaiss5",
            "category": "รับรางวัล",
            "title": "โล่รางวัลระดับประเทศ \"นวัตกรรมปัญญาประดิษฐ์ยอดเยี่ยม\" Super AI Engineer Season 5",
            "images": [
                "reward-and-event/2025/superaiss5/superai_ss5-1.jpg",
                "reward-and-event/2025/superaiss5/superai_ss5-2.jpg"
            ],
            "text": "🎉 ทีม D-MIND คว้ารางวัล “นวัตกรรมปัญญาประดิษฐ์ยอดเยี่ยม” (AI Innovation Award) ในงานระดับประเทศ Super AI Engineer Season 5 จากผลงาน \"นวัตกรรมเฝ้าระวังและแจ้งเตือนภัยพิบัติอัจฉริยะ (D-MIND)\" โดยทีม Secret\n\n👤 ผลงานของนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์:\n* นายกิตติ ชัยตา (นักศึกษาชั้นปีที่ 3 - ผู้สร้างหลัก)\n* นายศตวรรษ อินทรักษ์ (ทีมงานสนับสนุน ชั้นปีที่ 3)\n* นางสาวอนันตญา จันทร์เจริญ (ทีมงานสนับสนุน ชั้นปีที่ 3)\n* นางสาวมลตณรัตน์ วิวัฒเมทากร (ทีมงานสนับสนุน ชั้นปีที่ 3)\n* นางสาวเกศินี แซสันเทียะ (ทีมงานสนับสนุน ชั้นปีที่ 3)\n* นายอภิชัย ประมาณ (ทีมงานสนับสนุน ชั้นปีที่ 3)\n\n🧑‍🏫 อยู่ภายใต้การดูแลและผลักดันของ:\n* ผศ. ดร. ขวัญเรือน รัศมี (หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์)\n* ผศ. ดร. เศรษฐกาล โปร่งนุช (หัวหน้าสาขาวิศวกรรมหุ่นยนต์)\n\n🙏 ขอขอบคุณหน่วยบ่มเพาะค่าย มรภ.เทพสตรี ที่ให้การสนับสนุนและส่งเสริมการพัฒนานวัตกรรมของนักศึกษาในครั้งนี้"
        },
        {
            "year": "2026",
            "name": "aucc",
            "category": "รับรางวัล",
            "title": "รางวัลนานาชาติ Top 5 Outstanding Paper Award (อันดับที่ 3) - AUCC 2026",
            "images": [
                "reward-and-event/2026/aucc/aucc.png",
                "reward-and-event/2026/aucc/aucc2.jpg",
                "reward-and-event/2026/aucc/aucc3.jpg",
                "reward-and-event/2026/aucc/aucc5.jpg",
                "reward-and-event/2026/aucc/aucc6.jpg"
            ],
            "text": "🎉 สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม ขอแสดงความยินดีอย่างยิ่งกับนักศึกษาที่คว้ารางวัลการนำเสนอผลงานดีเด่นในเวทีระดับเอเชีย *AUCC 2026*\n\n🏅 รางวัล Top 5 Outstanding Paper Award (อันดับที่ 3)\n* หัวข้องานวิจัย: “การพัฒนาระบบผู้พิทักษ์พืชอัจฉริยะด้วยปัญญาประดิษฐ์เพื่อการดูแลพืชแบบอัตโนมัติ”\n* นักศึกษาผู้สร้างสรรค์: นายศตวรรษ อินทรักษ์ (ปี 3) และ นางสาวกัญญาณัฐ ลุนชาติ (ปี 3)\n* อาจารย์ที่ปรึกษาจากสาขาหุ่นยนต์: ผศ. ดร.ศรษฐกาล โปร่งนุช และ อาจารย์ทักษอร อักษรศิลป์\n\n💡 ผลงานชิ้นนี้ต่อยอดมาจากรายวิชา CPE3401 ระบบสมองกลฝังตัว (Embedded Systems) สะท้อนทักษะการบูรณาการเทคโนโลยี AI และ IoT เข้าด้วยกันเพื่อแก้ปัญหาได้จริง\n\n🎯 การประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 14 (The 14th Asia Undergraduate Conference on Computing) ณ มหาวิทยาลัยราชภัฏรำไพพรรณี จ.จันทบุรี (4-6 กุมภาพันธ์ 2569)"
        },
        {
            "year": "2026",
            "name": "TAXTALK",
            "category": "การแข่งขัน",
            "title": "โครงการพัฒนานักศึกษาเป็นผู้ประกอบการรายใหม่ (Start-up) - ทีม TAXTALK",
            "images": [
                "reward-and-event/2026/TAXTALK/TAXTALK.jpg"
            ],
            "text": "🤝 วันที่ 25-27 มีนาคม 2569 สาขาวิศวกรรมคอมพิวเตอร์ ร่วมกับสาขาวิศวกรรมหุ่นยนต์ ได้ส่งนักศึกษาทีม TAXTALK เข้าร่วมการอบรมเชิงปฏิบัติการ \"โครงการพัฒนานักศึกษาเป็นผู้ประกอบการรายใหม่ (Start-up/เจ้าของกิจการ/MSMEs)\"\n\n📌 รายละเอียดโครงการและสถานที่:\n* จัดขึ้น ณ โรงแรมอัมพวาน่านอน อ.อัมพวา จ.สมุทรสงคราม เพื่อมุ่งเน้นการส่งเสริมแนวคิดและทักษะการเป็นผู้ประกอบการยุคใหม่ในกลุ่มนักศึกษาเทคโนโลยี\n\n👥 สมาชิกทีม TAXTALK (นักศึกษาชั้นปีที่ 3):\n* นายศักดิ์นรินทร์ ศรีจันทร์ (สาขาวิศวกรรมคอมพิวเตอร์)\n* นายอภิชัย ประมาณ (สาขาวิศวกรรมคอมพิวเตอร์)\n* นายภาณุวัฒน์ อามาตย์ (สาขาวิศวกรรมคอมพิวเตอร์)\n\n🧑‍🏫 อาจารย์ผู้ดูแลและที่ปรึกษา:\n* ผู้ช่วยศาสตราจารย์ ดร.เศรษฐกาล โปร่งนุช (หัวหน้าสาขาวิศวกรรมหุ่นยนต์)\n* อาจารย์ทักษอร อักษรศิลป์ (อาจารย์สาขาวิศวกรรมหุ่นยนต์)\n* อาจารย์กานต์ เจริญจิตร (อาจารย์สาขาวิศวกรรมคอมพิวเตอร์)"
        },
        {
            "year": "2026",
            "name": "TAXTALK10K",
            "category": "ได้รับทุน",
            "title": "ทุนอุดหนุนพัฒนาผลิตภัณฑ์ต้นแบบ \"TAX-TALK\" ระบบ AI ให้คำปรึกษาและกรอกภาษีอัตโนมัติ",
            "images": [
                "reward-and-event/2026/TAXTALK10K/TAXTALK10K.jpg"
            ],
            "text": "🎊 ขอแสดงความยินดีกับนักศึกษาชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์ ที่ผ่านการพิจารณาคัดเลือกได้รับทุนอุดหนุนการพัฒนาผลิตภัณฑ์ต้นแบบของนักศึกษา ประจำปีงบประมาณ 2569\n\n💰 ทุนสนับสนุนโครงการ: 10,000 บาท\n📌 ชื่อโครงการวิจัยและพัฒนา:\n* AI นวัตกรรมการให้คำปรึกษาและกรอกภาษีบุคคลธรรมดาอัตโนมัติ “TAX-TALK”\n\n👥 สมาชิกผู้เสนอโครงการ (นักศึกษาชั้นปีที่ 3):\n* นายอภิชัย ประมาณ (สาขาวิศวกรรมคอมพิวเตอร์)\n* นายศักดิ์นรินทร์ ศรีจันทร์ (สาขาวิศวกรรมคอมพิวเตอร์)\n* นายภาณุวัฒน์ อามาตย์ (สาขาวิศวกรรมคอมพิวเตอร์)\n\n🧑‍🏫 อาจารย์ที่ปรึกษาโครงการ:\n* ผู้ช่วยศาสตราจารย์ ดร.เศรษฐกาล โปร่งนุช (หัวหน้าสาขาวิศวกรรมหุ่นยนต์)\n* อาจารย์ทักษอร อักษรศิลป์ (อาจารย์สาขาวิศวกรรมหุ่นยนต์)\n* อาจารย์กานต์ เจริญจิตร (อาจารย์สาขาวิศวกรรมคอมพิวเตอร์)"
        },
        {
            "year": "2026",
            "name": "escrow10k",
            "category": "ได้รับทุน",
            "title": "ทุนอุดหนุนพัฒนาผลิตภัณฑ์ต้นแบบ \"ระบบเอสโครว์อัจฉริยะและแพลตฟอร์มตรวจจับการทุจริตด้วย AI\"",
            "images": [
                "reward-and-event/2026/เอสโครว์อัจฉริยะ10K/เอสโครว์อัจฉริยะ10K.jpg"
            ],
            "text": "🎊 ขอแสดงความยินดีกับนักศึกษาชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์ ที่ผ่านการพิจารณาคัดเลือกได้รับทุนอุดหนุนการพัฒนาผลิตภัณฑ์ต้นแบบของนักศึกษา ประจำปีงบประมาณ 2569\n\n💰 ทุนสนับสนุนโครงการ: 10,000 บาท\n📌 ชื่อโครงการวิจัยและพัฒนา:\n* ระบบเอสโครว์อัจฉริยะและแพลตฟอร์มตรวจจับการทุจริตด้วยเอไอสำหรับการซื้อขายออนไลน์ระหว่างบุคคล (Smart Escrow System & AI Fraud Detection Platform)\n\n👥 สมาชิกผู้เสนอโครงการ (นักศึกษาชั้นปีที่ 3):\n* นางสาวณภัทร แซ่ตั้ง (สาขาวิศวกรรมคอมพิวเตอร์)\n* นางสาวอริษรา ราชนิยม (สาขาวิศวกรรมคอมพิวเตอร์)\n* นายธนพัตร ฉุยสุริฉาย (สาขาวิศวกรรมคอมพิวเตอร์)\n\n🧑‍🏫 อาจารย์ที่ปรึกษาโครงการ:\n* ผู้ช่วยศาสตราจารย์ ดร.พรภวิษย์ บุญศรีเมือง (อาจารย์สาขาวิศวกรรมคอมพิวเตอร์)\n* ผู้ช่วยศาสตราจารย์ ดร.ขวัญเรือน รัศมี (หัวหน้าสาขาวิศวกรรมคอมพิวเตอร์)\n* ผู้ช่วยศาสตราจารย์ ดร.รวิ อุตตมธนินทร์ (อาจารย์สาขาวิศวกรรมคอมพิวเตอร์)\n* อาจารย์กานต์ เจริญจิตร (อาจารย์สาขาวิศวกรรมคอมพิวเตอร์)\n* ผู้ช่วยศาสตราจารย์ ดร.เศรษฐกาล โปร่งนุช (หัวหน้าสาขาวิศวกรรมหุ่นยนต์)\n* อาจารย์ทักษอร อักษรศิลป์ (อาจารย์สาขาวิศวกรรมหุ่นยนต์)"
        },
        {
            "year": "2026",
            "name": "ICtechEd2026",
            "category": "งานประชุมวิชาการ",
            "title": "นำเสนอผลงานวิจัยระดับนานาชาติในเวทีวิชาการ IEEE - ICtechEd 2026",
            "images": [
                "reward-and-event/2026/ICtechEd2026/ICtechEd2026.png"
            ],
            "text": "🎓 ขอแสดงความยินดีกับคณาจารย์และนักศึกษาชั้นปีที่ 4 สาขาวิชาวิศวกรรมคอมพิวเตอร์ ในเวทีวิชาการระดับนานาชาติ The 13th International Conference on Technical Education (ICtechEd 2026) ระหว่างวันที่ 28–29 พฤษภาคม 2569 จัดโดย IEEE Thailand Section ณ มจพ.\n\n📄 งานวิจัยที่ได้ร่วมนำเสนอ:\n\"Design and Development of an Enhanced RFID-Based Name Verification System for Graduation Ceremonies\"\n\n👥 รายชื่อคณาจารย์และนักศึกษาผู้สร้างสรรค์:\n* ผู้ช่วยศาสตราจารย์ ดร.ชนมภัทร โตระสะ คณบดีและอาจารย์ประจำสาขาวิชา\n* ผศ.ดร.เศรษฐกาล โปร่งนุช หัวหน้าสาขาวิศวกรรมหุ่นยนต์\n* นายธนวัฒน์ สังขกุล (นักศึกษาชั้นปีที่ 4)\n* นายนัชชานนท์ เอ้งฉ้วน (นักศึกษาชั้นปีที่ 4)\n* นายวุฒิพงศ์ ปิ่นเสริมศักดิ์ (นักศึกษาชั้นปีที่ 4)\n* นายพีรเดช ธนาวิวัฒน์ (นักศึกษาชั้นปีที่ 4)"
        },
        {
            "year": "2025",
            "name": "kanagawa",
            "category": "โครงการแลกเปลี่ยนทางวิชาการ",
            "title": "โครงการแลกเปลี่ยนทางวิชาการ ณ Kanagawa Institute of Technology ประเทศญี่ปุ่น",
            "images": [
                "reward-and-event/2025/kanagawa/kanagawa.png"
            ],
            "text": "✈️ วันที่ 30 ตุลาคม 2568 ผู้ช่วยศาสตราจารย์ ดร.ชนมภัทร โตระสะ คณบดีคณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มอบของที่ระลึกและให้โอวาทแก่นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ ที่ผ่านการคัดเลือกเป็นตัวแทนมหาวิทยาลัย\n\n📌 นักศึกษาผู้เข้าร่วมโครงการแลกเปลี่ยน:\n* นายธนกฤต วรรณรังษี (นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์)\n* นายบัญญพนธ์ กรุดนาค (นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์)\n\n🇯🇵 เดินทางไปอบรมเชิงปฏิบัติการแลกเปลี่ยนนักศึกษา ณ Kanagawa Institute of Technology ประเทศญี่ปุ่น ระหว่างเดือนพฤศจิกายน ถึงธันวาคม 2568"
        },
        {
            "year": "2026",
            "name": "chiba",
            "category": "โครงการแลกเปลี่ยนทางวิชาการ",
            "title": "โครงการอบรมแลกเปลี่ยนทางวิชาการและวัฒนธรรมต่างประเทศ ณ Chiba University ประเทศญี่ปุ่น",
            "images": [
                "reward-and-event/2026/chiba/chiba1.jpg",
                "reward-and-event/2026/chiba/chiba2.jpg",
                "reward-and-event/2026/chiba/chiba3.jpg",
                "reward-and-event/2026/chiba/chiba4.jpg",
                "reward-and-event/2026/chiba/chiba5.jpg",
                "reward-and-event/2026/chiba/chiba6.jpg"
            ],
            "text": "🇯🇵 นักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ เข้าร่วมโครงการอบรมเชิงปฏิบัติการแลกเปลี่ยนนักศึกษาและอาจารย์ตามความร่วมมือทางวิชาการระดับนานาชาติ กับ มหาวิทยาลัยชิบะ ประเทศญี่ปุ่น ระหว่างวันที่ 26 กุมภาพันธ์ ถึงวันที่ 15 มีนาคม 2569\n\n📌 ตัวแทนนักศึกษาเข้าร่วมแลกเปลี่ยนปีการศึกษา 2568:\n1. นางสาวมลตณรัตน์ วิวัฒน์เมทากร (นักศึกษาชั้นปีที่ 3)\n2. นายอภิชัย ประมาณ (นักศึกษาชั้นปีที่ 3)\n\n🤝 กิจกรรมเน้นสร้างทักษะระดับสากล ผ่านการแลกเปลี่ยนนวัตกรรมเทคโนโลยี ข้อมูลความรู้ และเสริมสร้างมิตรภาพความร่วมมือระหว่างสองมหาวิทยาลัยให้แน่นแฟ้นยิ่งขึ้น"
        },
        {
            "year": "2025",
            "name": "MCUMultiArduinoWorkshop",
            "category": "อบรมเชิงปฏิบัติการ",
            "title": "กิจกรรม MCU Multi Arduino Workshop แลกเปลี่ยนร่วมกับ Chiba University ประเทศญี่ปุ่น",
            "images": [
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop1.jpg",
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop2.jpg",
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop3.jpg",
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop4.jpg",
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop5.jpg",
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop6.jpg",
                "reward-and-event/2025/MCUMultiArduinoWorkshop/MCUMultiArduinoWorkshop7.jpg"
            ],
            "text": "🤝 วันที่ 22 สิงหาคม 2568 คณาจารย์และนักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ สาขาวิชาวิศวกรรมหุ่นยนต์ และสาขาวิชาเทคโนโลยีไฟฟ้า ร่วมจัดกิจกรรมสร้างสรรค์เทคโนโลยี \"MCU Multi Arduino Workshop\" ต้อนรับนักศึกษาแลกเปลี่ยนจากมหาวิทยาลัยชิบะ (Chiba University) ประเทศญี่ปุ่น\n\n🏫 จัดขึ้น ณ ห้องกิจกรรม อาคาร 42 คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏสวนสุนันทา โดยมุ่งเน้นการแลกเปลี่ยนวัฒนธรรม การพัฒนาทักษะด้านฮาร์ดแวร์ไมโครคอนโทรลเลอร์ และการทำงานร่วมกันเป็นทีมในระดับสากล"
        },
        {
            "year": "2025",
            "name": "laos",
            "category": "อบรมเชิงปฏิบัติการ",
            "title": "โครงการฝึกอบรมเชิงปฏิบัติการทวิภาคี \"Smart Building Model Camp 2025\" ณ ประเทศลาว",
            "images": [
                "reward-and-event/2025/laos/laos.png"
            ],
            "text": "🌐 คณาจารย์และนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ บูรณาการร่วมมือระหว่างคณะวิศวกรรมศาสตร์ฯ และวิทยาลัยสถาปัตยกรรมศาสตร์ มหาวิทยาลัยราชภัฏสวนสุนันทา ในการเดินทางไปจัดอบรมเชิงปฏิบัติการทางวิชาการ ณ คณะสถาปัตยกรรมศาสตร์ มหาวิทยาลัยสุภานุวงศ์ สาธารณรัฐประชาธิปไตยประชาชนลาว ระหว่างวันที่ 24 – 27 พฤศจิกายน 2568\n\n👥 ผู้แทนสาขาวิชาวิศวกรรมคอมพิวเตอร์:\n* อาจารย์กานต์ เจริญจิตร (อาจารย์ผู้ดูแลประจำสาขา)\n* นายกิตติ ชัยตา (นักศึกษาชั้นปีที่ 3)\n* นายเกรียงศักดิ์ ภูมิดล (นักศึกษาชั้นปีที่ 2)\n\n🎯 มีการบูรณาการองค์ความรู้ด้านเทคโนโลยีอาคารอัจฉริยะ (Smart Building Model Camp 2025) ร่วมกับนักศึกษาสปป.ลาว โดยได้รับการสนับสนุนการแข่งขันและฝึกสอนเทคโนโลยีจาก บริษัท เอ็ดเคชั่น ออโตเมชั่น ซิสเต็ม จำกัด"
        },
        {
            "year": "2025",
            "name": "IoTinKorat",
            "category": "อบรมเชิงปฏิบัติการ",
            "title": "โครงการบริการวิชาการ IoT และระบบควบคุมอัตโนมัติ โรงเรียนจักราชวิทยา จ.นครราชสีมา",
            "images": [
                "reward-and-event/2025/IoTinKorat/IoTinKorat1.jpg",
                "reward-and-event/2025/IoTinKorat/IoTinKorat2.jpg",
                "reward-and-event/2025/IoTinKorat/IoTinKorat3.jpg",
                "reward-and-event/2025/IoTinKorat/IoTinKorat4.jpg",
                "reward-and-event/2025/IoTinKorat/IoTinKorat5.jpg"
            ],
            "text": "⚙️ ระหว่างวันที่ 16 - 18 มกราคม 2568 สาขาวิศวกรรมคอมพิวเตอร์ นำโดย อาจารย์ กานต์ เจริญจิตร ได้จัดโครงการพัฒนานักศึกษาสู่นักปฏิบัติมืออาชีพผ่านการถ่ายทอดเทคโนโลยี IoT และระบบควบคุมอัตโนมัติ\n\n📌 รายละเอียดกิจกรรมและการบูรณาการ:\n* นักศึกษาชั้นปีที่ 2 และ ปีที่ 3 รับหน้าที่เป็นวิทยากรและผู้ช่วยฝึกสอนหลักสูตร \"IoT เบื้องต้น\" ให้แก่นักเรียนระดับมัธยมศึกษาปีที่ 2 และ 5 จำนวน 72 คน ณ โรงเรียนจักราชวิทยา อ.จักราช จ.นครราชสีมา\n* โครงการนี้บูรณาการเข้ากับการเรียนรู้ตามแนวคิด Outcome-Based Education (OBE) โดยเป็นส่วนหนึ่งของการประเมินทักษะภาคปฏิบัติในรหัสวิชา CPE3101 ระบบฐานข้อมูล ภาคเรียนที่ 2 ปีการศึกษา 2568"
        }
    
    ]
};

let currentSlideIndex = 0;
const slides = [];

// Helper function to format descriptions into paragraphs and bullet lists
function formatDescription(text) {
  if (!text) return '';
  const lines = text.split('\n');
  let html = '';
  let inList = false;

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += '<br>';
      return;
    }

    if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
      if (!inList) {
        html += '<ul style="margin-left: 20px; margin-bottom: 10px; line-height: 1.5;">';
        inList = true;
      }
      const itemText = trimmed.substring(1).trim();
      // Highlight bold text using markdown style (e.g. *bold*)
      const processedText = itemText.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
      html += `<li style="margin-bottom: 5px;">${processedText}</li>`;
    } else if (/^\d+\./.test(trimmed)) {
      if (!inList) {
        html += '<ul style="margin-left: 20px; margin-bottom: 10px; line-height: 1.5;">';
        inList = true;
      }
      // Highlight bold text
      const processedText = trimmed.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
      html += `<li style="list-style-type: decimal; margin-bottom: 5px;">${processedText.substring(processedText.indexOf('.') + 1).trim()}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      const processedText = trimmed.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
      html += `<p style="margin-bottom: 8px; text-indent: 10px;">${processedText}</p>`;
    }
  });

  if (inList) {
    html += '</ul>';
  }
  return html;
}

// Helper to split academic title and name to prevent ugly wrapping inside cards
function formatCardName(name) {
  if (!name) return '';
  if (name.startsWith("ผู้ช่วยศาสตราจารย์ ดร.")) {
    return name.replace("ผู้ช่วยศาสตราจารย์ ดร.", "ผู้ช่วยศาสตราจารย์ ดร.<br>");
  }
  if (name.startsWith("อาจารย์ ดร.")) {
    return name.replace("อาจารย์ ดร.", "อาจารย์ ดร.<br>");
  }
  if (name.startsWith("อาจารย์ ")) {
    return name.replace("อาจารย์ ", "อาจารย์<br>");
  }
  if (name.startsWith("อาจารย์")) {
    return name.replace("อาจารย์", "อาจารย์<br>");
  }
  return name;
}

// Helper to dynamically adjust slide layout styles based on natural image dimensions
function adjustEventImage(imgEl) {
  const item = imgEl.parentElement;
  const container = item.parentElement;
  const width = imgEl.naturalWidth;
  const height = imgEl.naturalHeight;
  if (!width || !height) return;

  const ratio = width / height;

  // Clear any existing custom class
  item.classList.remove('portrait-item', 'landscape-item', 'square-item');

  // Determine size classification based on aspect ratio
  if (ratio < 0.85) {
    // Vertical image (portrait)
    item.classList.add('portrait-item');
    item.style.aspectRatio = '3/4';
  } else if (ratio > 1.3) {
    // Horizontal image (landscape)
    item.classList.add('landscape-item');
    item.style.aspectRatio = '4/3';
  } else {
    // Square or almost square image
    item.classList.add('square-item');
    item.style.aspectRatio = '1/1';
  }

  // Set explicit height/flex behavior based on total images in the container
  const count = parseInt(container.getAttribute('data-count') || '1');
  if (count === 1) {
    item.style.height = '340px';
    item.style.flex = '0 0 auto';
  } else if (count === 2) {
    item.style.height = '180px';
    item.style.flex = '0 0 auto';
  } else if (count === 3) {
    item.style.height = '150px';
    item.style.flex = '0 0 auto';
  } else {
    item.style.height = '120px';
    item.style.flex = '0 0 auto';
  }
}

// Generate Slide Deck Elements Dynamically
function buildSlides() {
  const container = document.getElementById('slides-container');
  const slideList = document.getElementById('slide-list');
  container.innerHTML = '';
  slideList.innerHTML = '';

  let slideCounter = 1;

  // Header template for logos (Top right of every slide)
  const logoHeaderHTML = `
    <div class="slide-logos">
      <img src="logo/cessru_icon.png" alt="CE SSRU Logo">
      <img src="EIT03.png" alt="EIT Faculty Logo">
    </div>
  `;

  // Helper to create basic slide div
  function createSlideDiv(id, tag, title) {
    const div = document.createElement('div');
    div.id = id;
    div.className = 'slide';
    div.innerHTML = `
      <div class="slide-header">
        <div class="slide-tag">${tag}</div>
        ${logoHeaderHTML}
      </div>
      <div class="slide-body" id="${id}-body"></div>
      <div class="slide-footer">
        <span class="slide-footer-text">สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มรภ.สวนสุนันทา</span>
        <span class="slide-number">สไลด์ที่ <span class="slide-idx-num">0</span></span>
      </div>
    `;
    return div;
  }

  // Helper to add item to sidebar list
  function addSidebarItem(title, index) {
    const li = document.createElement('li');
    li.className = 'slide-item';
    if (index === 0) li.classList.add('active');
    li.innerHTML = `
      <span class="slide-item-num">${String(index + 1).padStart(2, '0')}</span>
      <span class="slide-item-title">${title}</span>
    `;
    li.addEventListener('click', () => goToSlide(index));
    slideList.appendChild(li);
  }

  // --- SLIDE 1: Cover ---
  const slideCover = createSlideDiv('slide-cover', 'สไลด์แนะแนวสาขา', 'หน้าแรก');
  slideCover.querySelector('#slide-cover-body').innerHTML = `
    <div class="cover-layout">
      <div class="cover-info">
        <span class="cover-tagline">วิศวกรรมคอมพิวเตอร์ มรภ.สวนสุนันทา</span>
        <h1 class="cover-title">ปฐมนิเทศปี <span>69</span></h1>
        <p class="cover-subtitle">ยินดีต้อนรับน้องๆนักศึกษาใหม่สาขาวิศวกรรมคอมพิวเตอร์ประจำปี 2569</p>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 15px;">
          ระบบการเรียนการสอนมุ่งเน้นสร้างนักปฏิบัติวิชาชีพที่มีทักษะด้านฮาร์ดแวร์, ซอฟต์แวร์, คลาวด์, IoT และปัญญาประดิษฐ์ (AI)
        </p>
      </div>
      <div class="cover-visual">
        <div class="visual-glow"></div>
        <img class="cover-main-logo" src="logo/cessru_icon.png" alt="SSRU CE logo">
      </div>
    </div>
  `;
  container.appendChild(slideCover);
  addSidebarItem('หน้าปกการนำเสนอ', 0);
  slides.push(slideCover);

  // --- SLIDE 2: Head of Department ---
  const headTeacher = PRESENTATION_DATA.teachers.dept[0];
  const slideHead = createSlideDiv('slide-head', 'แนะนำคณาจารย์ผู้บริหาร', 'หัวหน้าสาขา');
  slideHead.querySelector('#slide-head-body').innerHTML = `
    <div class="profile-layout">
      <div class="profile-img-container">
        <img class="profile-img" src="${headTeacher.image}" alt="${headTeacher.name}">
        <div class="profile-glow"></div>
      </div>
      <div class="profile-info">
        <div class="profile-role">หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์</div>
        <h2 class="profile-name">${headTeacher.name}</h2>
        <p class="profile-details">${headTeacher.details}</p>
      </div>
    </div>
  `;
  container.appendChild(slideHead);
  addSidebarItem('แนะนำหัวหน้าสาขาวิชา', 1);
  slides.push(slideHead);

  // --- SLIDE 3: Department Teachers Grid ---
  const deptTeachers = PRESENTATION_DATA.teachers.dept.slice(1);
  const slideDeptGrid = createSlideDiv('slide-dept-grid', 'แนะนำอาจารย์ประจำสาขาวิชา', 'อาจารย์ประจำสาขา');
  let cardsHTML = '';
  deptTeachers.forEach(t => {
    cardsHTML += `
      <div class="teacher-card">
        <div class="card-img-wrapper">
          <img class="card-img" src="${t.image}" alt="${t.name}">
        </div>
        <div class="card-content">
          <h3 class="card-name">${formatCardName(t.name)}</h3>
          <p class="card-role">${t.role}</p>
        </div>
      </div>
    `;
  });
  slideDeptGrid.querySelector('#slide-dept-grid-body').innerHTML = `
    <div class="grid-layout">
      <h2 class="grid-title" style="margin-bottom: 20px;">อาจารย์ประจำสาขาวิชาวิศวกรรมคอมพิวเตอร์</h2>
      <div class="grid-cards">${cardsHTML}</div>
    </div>
  `;
  container.appendChild(slideDeptGrid);
  addSidebarItem('แนะนำอาจารย์ประจำสาขา', 2);
  slides.push(slideDeptGrid);

  // --- SLIDE 4: Curriculum Teachers Grid ---
  const curriculumTeachers = PRESENTATION_DATA.teachers.curriculum;
  const slideCurrGrid = createSlideDiv('slide-curr-grid', 'แนะนำคณาจารย์หลักสูตร', 'อาจารย์ผู้สอนประจำหลักสูตร');
  let currCardsHTML = '';
  curriculumTeachers.forEach(t => {
    currCardsHTML += `
      <div class="teacher-card" style="width: 290px; height: 140px;">
        <div class="card-img-wrapper">
          <img class="card-img" src="${t.image}" alt="${t.name}">
        </div>
        <div class="card-content" style="padding: 10px 12px;">
          <h3 class="card-name" style="font-size: 0.82rem; margin-bottom: 2px; line-height: 1.25;">${formatCardName(t.name)}</h3>
          <p class="card-role" style="font-weight: 600; color: var(--primary-color); margin-bottom: 1px; font-size: 0.7rem;">${t.role}</p>
          <p class="card-role" style="font-size: 0.7rem; line-height: 1.25;">${t.dept}</p>
        </div>
      </div>
    `;
  });
  slideCurrGrid.querySelector('#slide-curr-grid-body').innerHTML = `
    <div class="grid-layout">
      <h2 class="grid-title" style="margin-bottom: 10px;">อาจารย์ผู้สอนประจำหลักสูตร</h2>
      <div class="grid-cards" style="flex-wrap: wrap; justify-content: center; gap: 15px 12px; max-width: 1020px; margin: 0 auto; overflow: visible;">${currCardsHTML}</div>
    </div>
  `;
  container.appendChild(slideCurrGrid);
  addSidebarItem('แนะนำอาจารย์ประจำหลักสูตร', 3);
  slides.push(slideCurrGrid);

  // --- SLIDE 5: Events/Awards Timeline Dashboard ---
  const slideTimeline = createSlideDiv('slide-timeline', 'สรุปภาพรวมรางวัลและกิจกรรม', 'กิจกรรมสาขา');
  let timelineCardsHTML = '';
  PRESENTATION_DATA.events.forEach((ev, i) => {
    // Determine a short summary title
    let shortTitle = ev.title;
    if (shortTitle.length > 50) shortTitle = shortTitle.substring(0, 48) + '...';

    // First image or fallback to logo
    const imgUrl = ev.images.length > 0 ? ev.images[0] : 'logo/cessru_icon.png';

    timelineCardsHTML += `
      <div class="overview-card" onclick="goToSlide(${4 + 1 + i})">
        <div class="overview-header">
          <span class="overview-year">${ev.year}</span>
          <span class="overview-index">${ev.category}</span>
        </div>
        <div class="overview-title">${shortTitle}</div>
        <div class="overview-footer">
          <span>ดูรายละเอียด</span>
          <span>➜</span>
        </div>
      </div>
    `;
  });
  slideTimeline.querySelector('#slide-timeline-body').innerHTML = `
    <div class="overview-layout">
      <h2 class="grid-title" style="margin-bottom: 20px;">สรุปรางวัลและโครงการเด่นนักศึกษา (2025 - 2026)</h2>
      <div class="overview-grid">${timelineCardsHTML}</div>
    </div>
  `;
  container.appendChild(slideTimeline);
  addSidebarItem('ผลงานเด่น & กิจกรรม', 4);
  slides.push(slideTimeline);

  // --- SLIDES 6 to 13: Event Detail Slides ---
  PRESENTATION_DATA.events.forEach((ev, i) => {
    const slideId = `slide-event-${ev.name}`;
    const slideIndex = 5 + i;
    const slide = createSlideDiv(slideId, ev.category, ev.title);

    // Helper to generate a gallery grid HTML
    function buildGalleryGrid(imageArray, galleryId, fallbackText = "No image") {
      if (!imageArray || imageArray.length === 0) {
        return `
          <div class="event-image-grid" style="display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05); height: 100%; min-height: 250px; max-height: 380px; border-radius: 12px; border: 1px solid var(--border-color);">
            <img style="height: 120px; width: auto; opacity: 0.15;" src="logo/cessru_icon.png" alt="${fallbackText}">
          </div>
        `;
      }

      let gridImagesHTML = '';
      imageArray.forEach(img => {
        gridImagesHTML += `
          <div class="event-grid-item" onclick="openLightbox('${img}')">
            <img src="${img}" alt="Event image" onload="adjustEventImage(this)">
          </div>
        `;
      });

      return `
        <div class="event-image-grid flex-gallery" id="${galleryId}" data-count="${imageArray.length}">
          ${gridImagesHTML}
        </div>
      `;
    }

    // Distribute images between left and right galleries so they don't repeat
    let leftImages = [];
    let rightImages = [];

    const totalImages = ev.images.length;
    let eventDetailsStyle = '';

    if (totalImages === 1) {
      // 1 image: original position (right) gets the image, left details are centered with NO watermark
      rightImages = [ev.images[0]];
      eventDetailsStyle = 'align-items: center; text-align: center;';
    } else if (totalImages === 2) {
      leftImages = [ev.images[0]];
      rightImages = [ev.images[1]];
    } else if (totalImages === 3) {
      leftImages = [ev.images[0]];
      rightImages = [ev.images[1], ev.images[2]];
    } else if (totalImages > 3) {
      const half = Math.ceil(totalImages / 2);
      leftImages = ev.images.slice(0, half);
      rightImages = ev.images.slice(half);
    }

    const leftGalleryHTML = leftImages.length > 0 ? buildGalleryGrid(leftImages, `gallery-${ev.name}-left`) : '';
    const rightGalleryHTML = buildGalleryGrid(rightImages, `gallery-${ev.name}-right`);

    slide.querySelector(`#${slideId}-body`).innerHTML = `
      <div class="event-layout">
        <div class="event-details" style="${eventDetailsStyle}">
          <div class="event-year-tag">${ev.year}</div>
          <h2 class="event-title">${ev.title}</h2>
          ${leftGalleryHTML ? `<div class="event-description-images" style="margin-top: 10px; width: 100%;">${leftGalleryHTML}</div>` : ''}
        </div>
        ${rightGalleryHTML}
      </div>
    `;

    container.appendChild(slide);
    addSidebarItem(ev.title, slideIndex);
    slides.push(slide);
  });

  // Update slide count numbers in footers
  document.querySelectorAll('.slide').forEach((slideNode, idx) => {
    slideNode.querySelector('.slide-idx-num').innerText = `${idx + 1}/${slides.length}`;
  });
}

// Gallery Navigation Trackers
const galleryPositions = {};

function moveGallery(eventName, direction, event) {
  if (event) event.stopPropagation();
  const evData = PRESENTATION_DATA.events.find(e => e.name === eventName);
  if (!evData) return;

  if (!(eventName in galleryPositions)) {
    galleryPositions[eventName] = 0;
  }

  let index = galleryPositions[eventName] + direction;
  const total = evData.images.length;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  setGalleryIndex(eventName, index);
}

function setGalleryIndex(eventName, index, event) {
  if (event) event.stopPropagation();
  galleryPositions[eventName] = index;

  const container = document.getElementById(`container-${eventName}`);
  const counterText = document.getElementById(`count-${eventName}`);

  if (container) {
    container.style.transform = `translateX(-${index * 100}%)`;
  }
  if (counterText) {
    counterText.innerText = index + 1;
  }

  // Update dots
  const dotsContainer = document.getElementById(`dots-${eventName}`);
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.gallery-dot');
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
}

// Lightbox Zoom Logic
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// Slide Navigation Logic
function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;

  // Deactivate current slide
  slides[currentSlideIndex].classList.remove('active');

  // Update sidebar active state
  const sidebarItems = document.querySelectorAll('.slide-item');
  if (sidebarItems[currentSlideIndex]) sidebarItems[currentSlideIndex].classList.remove('active');

  currentSlideIndex = index;

  // Activate new slide
  slides[currentSlideIndex].classList.add('active');
  if (sidebarItems[currentSlideIndex]) {
    sidebarItems[currentSlideIndex].classList.add('active');
    // Scroll sidebar item into view if needed
    sidebarItems[currentSlideIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Update footer progress display
  document.getElementById('current-slide-num').innerText = currentSlideIndex + 1;

  // Disable / Enable floating navigation buttons
  document.getElementById('btn-prev').disabled = currentSlideIndex === 0;
  document.getElementById('btn-next').disabled = currentSlideIndex === slides.length - 1;
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

// Help Modal controls (PDF Export instructions)
function showPrintModal() {
  document.getElementById('print-modal').classList.add('active');
}

function closePrintModal() {
  document.getElementById('print-modal').classList.remove('active');
}

function startPrint() {
  closePrintModal();
  setTimeout(() => {
    window.print();
  }, 300);
}

// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);

  const themeBtn = document.getElementById('btn-theme');
  if (newTheme === 'light') {
    themeBtn.innerHTML = '☀️ Mode';
    themeBtn.setAttribute('title', 'เปลี่ยนเป็นธีมมืด');
  } else {
    themeBtn.innerHTML = '🌙 Mode';
    themeBtn.setAttribute('title', 'เปลี่ยนเป็นธีมสว่าง');
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  buildSlides();

  // Set total slides in indicator
  document.getElementById('total-slides-num').innerText = slides.length;

  // Set initial slide state
  goToSlide(0);

  // Setup Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    // If modal is active or user is inside an input, skip
    if (document.getElementById('print-modal').classList.contains('active') ||
      document.getElementById('lightbox').classList.contains('active')) {
      if (e.key === 'Escape') {
        closePrintModal();
        closeLightbox();
      }
      return;
    }

    if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === ' ' || e.key === 'PageDown') {
      nextSlide();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
      prevSlide();
      e.preventDefault();
    } else if (e.key === 'Home') {
      goToSlide(0);
      e.preventDefault();
    } else if (e.key === 'End') {
      goToSlide(slides.length - 1);
      e.preventDefault();
    }
  });

  // Lightbox click-to-close
  document.getElementById('lightbox').addEventListener('click', closeLightbox);
});
