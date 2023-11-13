const  FEATURE: {
    id:number,
    title: string
    detail: string
    icon: string
    route: string,
    chidrents:{
        name:string,
        icon:string,
        price:number,
        description:string,
        unit:string,
        selected:boolean
    }[]
}[] = [
        {
            id:1,
            title: 'ระบบสมาชิก',
            detail: 'เก็บรวบรวมข้อมูลเพื่อใช้ในการวิเคราะห์ผู้ใช้งานเว็บไซต์ จำกัดสิทธิ์ แบ่งแยกระดับผู้ใช้',
            icon: 'user.png',
            route: 'login',
            chidrents:[
                {
                    selected:false,
                    name:'การเข้าสู่ระบบ ด้วย Email และ password',
                    icon:'confidential-email.png',
                    price: 800,
                    unit:'ระบบ',
                    description:'ระบบการยืนยันตัวตนที่ง่ายที่สุดและมีประสิทธิภาพในการสร้างระบบยืนยันตัวตนให้กับผู้ใช้งานของเว็บไซต์ เพื่อจัดเก็บข้อมูลผู้ใช้งานเว็บไซต์ของคุณ'  
                },
                {
                    selected:false,
                    name:'การเข้าสู่ระบบ ด้วย facebook',
                    icon:'facebook-logo.png',
                    price: 400,
                    unit:'ระบบ',
                    description:'ระบบการยืนยันตัวตนที่อำนวยความสะดวกให้กับผู้ใช้ที่มีบัญชี Facebook อยู่แล้ว ทำให้ได้รับจำนวนผู้ใช้ที่สมัครสมาชิกสูงขึ้น'  
                },
                {
                    selected:false,
                    name:'การเข้าสู่ระบบด้วย line',
                    icon:'line.png',
                    price: 400,
                    unit:'ระบบ',
                    description:'ระบบการยืนยันตัวตนที่อำนวยความสะดวกให้กับผู้ใช้ที่มีบัญชี Line อยู่แล้ว ทำให้ได้รับจำนวนผู้ใช้ที่สมัครสมาชิกสูงขึ้น'  
                },
                {
                    selected:false,
                    name:'การเข้าสู่ระบบด้วย google',
                    icon:'search.png',
                    price: 400,
                    unit:'ระบบ',
                    description:'ระบบการยืนยันตัวตนที่อำนวยความสะดวกให้กับผู้ใช้ที่มีบัญชี Google อยู่แล้ว ทำให้ได้รับจำนวนผู้ใช้ที่สมัครสมาชิกสูงขึ้น'  
                },
                {
                    selected:false,
                    name:'ความปลอดภัยของระบบด้วย Refresh token',
                    icon:'nft.png',
                    price: 700,
                    unit:'ระบบ',
                    description:'ระบบเข้ารหัสของผู้ใช้งานที่ผ่านการยืนยันตัวตนแล้ว ที่มีความปลอดภัยสูงสุดในการเข้ารหัสด้วย JWT จะทำให้มั่นใจได้ว่าข้อมูลของผู้ใช้ไม่รั่วไหล'  
                },
                {
                    selected:false,
                    name:'การจัดการข้อมูลส่วนตัวของผู้ใช้',
                    icon:'user.png',
                    price: 500,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดให้ผู้ใช้ที่ลงทะเบียนแล้วสามารถแก้ไขข้อมูลส่วนตัวของตนได้ เหมาะกับเว็บไซต์ที่ต้องการความเป็นปัจจุบันของข้อมูลผู้ใช้ และได้ข้อมูลผู้ใช้ที่ครบถ้วนมากยิ่งขึ้น'  
                },
                {
                    selected:false,
                    name:'การเปลี่ยนรหัสผ่าน',
                    icon:'padlock.png',
                    price: 400,
                    unit:'ระบบ',
                    description:'เพิ่มระดับความปลอดภัยให้กับบัญชีผู้ใช้งานที่ลงทะเบียน โดยการเปิดให้ผู้ใช้แก้ไขรหัสผ่านของตนเอง'  
                },
                {
                    selected:false,
                    name:'ระบบลืมรหัสผ่าน',
                    icon:'forgot-password.png',
                    price: 400,
                    unit:'ระบบ',
                    description:'ระบบการกู้คืนรหัสผ่าน จะส่งลิ้งยืนยันบัญชีผู้ใช้ไปที่ Email ของผู้ใช้ที่ใช้ลงทะเบียน เพื่อให้กรอกรหัสผ่านใหม่'  
                },
                {
                    selected:false,
                    name:'ระบบยืนยันการสมัครสมาชิกผ่าน Email',
                    icon:'email.png',
                    price: 300,
                    unit:'ระบบ',
                    description:'เพื่อให้ได้ผู้ใช้งานที่เป็นบัญชีจริงไม่ใช่จากการสุ่มสร้างบัญชีปลอมของผู้ไม่หวังดี ระบบยืนยันบัญชีด้วย Email จะเข้ามาช่วยในเรื่องนี้'  
                },
                {
                    selected:false,
                    name:'ระบบการเก็บประวัติการเข้าสู่ระบบของสมาชิก',
                    icon:'file.png',
                    price: 300,
                    unit:'ระบบ',
                    description:'หากต้องการเข้าใจพฤติกรรมการเข้าใช้งานเว็บไซต์ของผู้ใช้งาน การเก็บประวัติการเข้าสู่ระบบเป็นทางเลือกที่ อีกทั้งยังช่วยในการป้องกันการสวมสิทธิบัญชี โดยส่งการแจ้งเตือนการเข้าสู่ระบบไปยัง Email'  
                },
                {
                    selected:false,
                    name:'ระบบอนุมัติสมาชิกผ่านแอดมิน',
                    icon:'check.png',
                    price: 500,
                    unit:'ระบบ',
                    description:'ระบบที่มีการคัดกรองผู้ใช้อย่างเข้มงวด อาจจำเป็นที่จะต้องให้ผู้ใช้ส่งเอกสารบางอย่างเพื่อให้เจ้าหน้าที่อนุมัติการเป็นสมาชิกก่อนจึงจะสามารถใช้งานได้'  
                },
                {
                    selected:false,
                    name:'ระบบระดับขั้นของสมาชิก',
                    icon:'volume-control.png',
                    price: 1000,
                    unit:'ระบบ',
                    description:'เว็บไซต์ที่มีฟังก์ชั่นการใช้งานที่หลากหลาย และไม่อยากใหัผู้ใช้ใช้งานร่วมกันทั้งหมด รวมถึงการแยกระดับของผู้ใช้ในระดับโมดูล'  
                }
            ]
        },
        {
            id:2,
            title: 'ระบบขายสินค้า',
            icon: 'shopping-bag.png',
            detail: 'ระบบสำหรับเว็บไซต์ที่มีการขายสินค้าผ่านหน้าเว็บ ',
            route: 'marketplace',
            chidrents:[
                {
                    selected:false,
                    name:'ระบบการเพิ่มสินค้า แก้ไขสินค้า',
                    icon:'add.png',
                    price: 1500,
                    unit:'ระบบ',
                    description:'ระบบพื้นฐานที่สุดในการเริ่มขายสินค้าผ่านหน้าเว็บ ที่จะมีหน้าแสดงรายการสินค้า เพิ่มสินค้า และแก้ไขได้'  
                },
                {
                    selected:false,
                    name:'ระบบสืบค้นสินค้าและหมวดหมู่',
                    icon:'folder-management.png',
                    price: 800,
                    unit:'ระบบ',
                    description:'ระบบจะเปิดให้ผู้ใช้ค้นหาสินค้า จัดเรียงและเลือกแสดงบางส่วน หรือตามหมวดหมู่ของสินค้าได้ เพื่อเพิ่มความสะดวกในการหาสินค้า'  
                },
                {
                    selected:false,
                    name:'ระบบแชสินค้าผ่าน Social media',
                    icon:'network.png',
                    price: 1500,
                    unit:'ระบบ',
                    description:'ระบบจะเปิดให้ผู้ใช้แชร์สินค้าไปยัง Facebook , Intragram , Line เพื่อเพิ่มจำนวนผู้เข้าชมสินค้าที่มากขึ้น'  
                },
                {
                    selected:false,
                    name:'ระบบตัดสต้อกสินค้า',
                    icon:'in-stock.png',
                    price: 800,
                    unit:'ระบบ',
                    description:'ระบบที่จะช่วยให้เรารับรู้สถานะสินค้าคงคลังเพื่อใช้ในการวางแผนการจัดซื้อ และช่วยลดการเสียโอกาศในการขายเนื่องจากสินค้าหมด'  
                },
                {
                    selected:false,
                    name:'ระบบตะกร้าสินค้า',
                    icon:'shopping-cart.png',
                    price: 500,
                    unit:'ระบบ',
                    description:'ระบบที่จะช่วยให้ผู้ใช้ซื้อสินค้าได้หลายรายการ และบันทึกรายการสินค้าที่ต้องการซื้อไว้ซื้อภายหลัง'  
                },
                {
                    selected:false,
                    name:'ระบบติดตามพัสดุ',
                    icon:'tracking.png',
                    price: 2000,
                    unit:'ระบบ',
                    description:'ระบบที่แสดงสถานะการจัดส่งจากเรียกใช้ Api ของผู้ให้บริการจัดส่ง และนำมาแสดงที่เว็บไซต์ เพื่อให้ผู้ซื้อสามารถติดตามสถานะการจัดส่งของตนได้'  
                },
                {
                    selected:false,
                    name:'ระบบส่วนลดสินค้า',
                    icon:'coupon.png',
                    price: 700,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดเปิดขายสินค้าลดราคาได้ เพื่อให้ส่งเสริมสินค้าบางตัวในบางช่วงเวลาได้'  
                },
                {
                    selected:false,
                    name:'ระบบผู้ขายร่วม',
                    icon:'global.png',
                    price: 3500,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดให้สมาชิกสามารถขายสินค้าของตนเองได้ '  
                },
            ]
        },
        {
            id:3,
            title: 'ระบบชำระเงิน',
            icon: 'credit-card.png',
            detail: 'ระบบทีเปิดให้ผู้ใช้ชำระเงินผ่านเว็บไซต์ผ่านผู้ให้บริการต่างๆ',
            route: 'payment',
            chidrents:[
                {
                    selected:false,
                    name:'ระบบการชำระเงินผ่าน QR code',
                    icon:'qr-code.png',
                    price: 20000,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดให้ผู้ใช้ชำระเงินค่าสินค้าหรือบริการผ่าน Qr code ของ GB payment และเปลี่ยนสถานะคำสั่งซื้ออัตโนมัติ '  
                },
                {
                    selected:false,
                    name:'เชื่อมต่อการชำระเงินกับ Omise',
                    icon:'wallet.png',
                    price: 35000,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดให้ผู้ใช้ชำระเงินค่าสินค้าหรือบริการผ่าน omise  และเปลี่ยนสถานะคำสั่งซื้ออัตโนมัติ ซืึ่งจะรองรับการการจ่ายเกือบทั้งหมด'  
                },
                {
                    selected:false,
                    name:'เชื่อมต่อการชำระเงินกับ Stripe',
                    icon:'credit-card.png',
                    price: 35000,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดให้ผู้ใช้ชำระเงินค่าสินค้าหรือบริการผ่าน stripe และเปลี่ยนสถานะคำสั่งซื้ออัตโนมัติ ซืึ่งจะรองรับการการจ่ายเกือบทั้งหมด'  
                },
            ]
        },
        {
            id:4,
            title: 'ระบบ GPS',
            icon: 'gps.png',
            detail: 'ระบบที่เกี่ยวกับแผนที่ การนำทาง ',
            route: 'gps',
            chidrents:[
                {
                    selected:false,
                    name:'ระบบระบุตำแหน่งด้วย GPS',
                    icon:'gps-verify.png',
                    price: 3500,
                    unit:'ระบบ',
                    description:'ระบบที่เปิดให้ระบุตำแหน่ง ของสินค้า บริการ หรือผู้ใช้บนแผนที่ได้'  
                },
                {
                    selected:false,
                    name:'ระบบนำทางด้วย google map',
                    icon:'map.png',
                    price: 3500,
                    unit:'ระบบ',
                    description:'ระบบที่ส่งข้อมูลให้กับแอพลิเคชั่น ภายนอกเช่น Google map เพื่อใช้ในการนำทางไปยังสถานที่ต่างๆ'  
                },
                {
                    selected:false,
                    name:'ระบบการค้นหาจากพื้นที่',
                    icon:'placeholder.png',
                    price: 5000,
                    unit:'ระบบ',
                    description:'ระบบการค้นหาสินค้าโดยระบุจากพื้นที่ หรือพื้นที่ไกล้เคียงจากตำแหน่งปัจจุบันของผู้ใช้งาน'  
                },
                {
                    selected:false,
                    name:'การแสดงตำแหน่งบนแผนที่',
                    icon:'gps-location.png',
                    price: 5000,
                    unit:'ระบบ',
                    description:'การแสดงตำแหน่งสินค้า บริการ หรือผู้ใช้งานระบบ บนแผนที่ในเว็บไซต์'  
                },
                {
                    selected:false,
                    name:'การแสดงตำแหน่งบนแผนที่แบบเรียวไทม์',
                    icon:'location.png',
                    price: 7500,
                    unit:'ระบบ',
                    description:'แสดงการเคลื่อนไหวของสินค้า บริการ หรือผู้ใช้งานระบบบนแผนที่ในเว็บไซต์ โดยอ้างอิงจากตำแหน่งจริงในเวลานั้น'  
                },
            ]
        },
        {
            id:5,
            title: 'ระบบควบคุมอุปกรณ์ ฮาดแวร์',
            icon: 'cpu.png',
            detail: 'โปรแกรมสำหรับควบคุม Node MCU ',
            route: 'hardware',
            chidrents:[
                {
                    selected:false,
                    name:'เขียนระบบควบคุม ESP8266',
                    icon:'circuit.png',
                    price: 500,
                    unit:'โมดูล',
                    description:'โปรแกรมสำหรับควบคุม อุปกรณ์ Input Output ต่างๆ ทีเชื่อมต่อ กับ Esp 8266'  
                },
                {
                    selected:false,
                    name:'เขียนระบบควบคุม ESP32',
                    icon:'circuit.png',
                    price: 500,
                    unit:'โมดูล',
                    description:'โปรแกรมสำหรับควบคุม อุปกรณ์ Input Output ต่างๆ ทีเชื่อมต่อ กับ Esp32'  
                },
                {
                    selected:false,
                    name:'เชื่อมต่ออุปกรณ์กับ Broker',
                    icon:'server.png',
                    price: 1500,
                    unit:'ระบบ',
                    description:'ทำให้ Arduino ทำงานตามคำสั่งที่ส่งมาจาก MQTT Broker'  
                },
                {
                    selected:false,
                    name:'หน้าเว็บสำหรับสั่งงานอุปกรณ์',
                    icon:'mixer.png',
                    price: 300,
                    unit:'โมดูล',
                    description:'หน้าเว็บสั่งงานอุปกรณ์ที่เชื่อต่อกับ MQTT Broker เพื่อส่งคำสั่ง และให้ Broker ส่งคำสั่งไปยังอุปกรณ์'  
                },

            ]
        },
        {
            id:6,
            title: 'ระบบรายงานผล',
            icon: 'dashboard.png',
            detail: 'รายงานผลการทำงานของระบบต่างๆ ของแต่ละโมดูล',
            route: 'dashboard',
            chidrents:[
                {
                    selected:false,
                    name:'ระบบรายงานผลผ่านหน้าจอ',
                    icon:'business.png',
                    price: 700,
                    unit:'โมดูล',
                    description:'ระบบรายงานผลผ่านหน้าจอด้วย chart รูปแบบต่างๆ หรือข้อมูลการวิเคราะเชิงเปรียบเทียบ'  
                },
                {
                    selected:false,
                    name:'รายงานผลรูปแบบเอกสาร PDF',
                    icon:'pdf.png',
                    price: 1500,
                    unit:'โมดูล',
                    description:'รายงานผลในรูปแบบเอกสาร PDF เมื่อระบบต้องการเอกสารที่ไม่สามารถแก้ไขได้'  
                },
                {
                    selected:false,
                    name:'รายการผลรูปแบบไฟล์ Word',
                    icon:'word.png',
                    price: 1500,
                    unit:'โมดูล',
                    description:'รายงานผลในรูปแบบเอกสาร Docx เมื่อระบบต้องการเอกสารที่เปิดให้ผู้ใช้นำเอกสารใช้งานต่อ'  
                },
                {
                    selected:false,
                    name:'รายงานผลรูปแบบไฟล์ Excel',
                    icon:'excel.png',
                    price: 1500,
                    unit:'โมดูล',
                    description:'รายงานผลในรูปแบบเอกสาร Xcel เมื่อระบบต้องการเอกสารที่เปิดให้ผู้ใช้นำเอกสารใช้งานต่อในเชิงการคำนวน'  
                },
                {
                    selected:false,
                    name:'นำเข้าข้อมูลรูปแบบไฟล์ Excel',
                    icon:'import.png',
                    price: 1500,
                    unit:'โมดูล',
                    description:'ระบบเปิดให้ผู้ใช้นำเข้าข้อมูลผ่านไฟล์ Excel '  
                },
                {
                    selected:false,
                    name:'นำออกข้อมูลรูปแบบไฟล์ Excel',
                    icon:'export.png',
                    price: 400,
                    unit:'โมดูล',
                    description:'ระบบสามารถนำออกข้อมูลในรูปแบบไฟล์ Excel'  
                },
            ]
        },
        {
            id:7,
            title: 'เว็บ Landing page',
            icon: 'internet.png',
            detail: 'เว็บไซต์แนะนำข้อมูลข่าวสารเกี่ยวกับสินค้า หรือธุรกิจ',
            route: 'landingpage',
            chidrents:[
                {
                    selected:false,
                    name:'เว็บไซต์แนะนำธุรกิจ',
                    icon:'web-design.png',
                    price: 1000,
                    unit:'หน้า',
                    description:'เว็บไซต์แนะนำข้อมูลข่าวสารเกี่ยวกับสินค้า บริการ หรือธุรกิจของท่าน ที่รองรับการค้นหาด้วย Google'  
                },
            ]
        },
        {
            id:8,
            title: 'ออกแบบระบบใหม่',
            icon: 'sketch.png',
            detail: 'สำหรับต้องการออกแบบระบบที่มีความจำเพาะเจาะจงเป็นพิเศษ',
            route: 'custom',
            chidrents:[
                {
                    selected:true,
                    name:'ระบบเพิ่มลบแก้ไข',
                    icon:'sketch.png',
                    price: 4500,
                    unit:'โมดูล',
                    description:'โมดูลเสริมที่ออกแบบเองตามความความต้องการของผู้ใช้งาน เช่น โมดูลการจัดการพนักงาน ของระบบ Erp ที่จำเป็นต้องเก็บ Requirement เพิ่ม'  
                },
                {
                    selected:true,
                    name:'ระบบฟังชั่นการทำงานที่ซับซ้อน',
                    icon:'sketch.png',
                    price: 4500,
                    unit:'โมดูล',
                    description:'ฟังก์ชั่นการทำงานที่ซับซ้อนที่ต้องได้รับการออกแบบเป็นพิเศษ ที่จำเป็นต้องเก็บ Requirement เพิ่ม'  
                }
            ]
        }
    ]
export default FEATURE
