// ملف جافاسكربت أساسي: تسجيل دخول بسيط، تخزين المستخدمين، رفع محاضرات (رابط أو ملف صغير)

document.addEventListener('DOMContentLoaded', ()=>{
    // سنة الفوتر
    const y = new Date().getFullYear();
    const elYear = document.getElementById('year'); 
    if(elYear) elYear.textContent = y;

    // التعامل مع صفحات متعددة
    if(document.getElementById('loginForm')) setupAuth();
    if(document.getElementById('uploadLec')) setupLectures();
    if(document.getElementById('logoutBtn')){
        document.getElementById('logoutBtn').addEventListener('click', ()=>{
            localStorage.removeItem('currentUser');
            location.href='index.html';
        });
    }
});


// ===============================
//      👇 إضافة الأعضاء يدويًا
// ===============================
// أضف الأسماء الجديدة هنا فقط
const manualUsers = [
    { username: "Giovanny Rafaat", password: "govanyrafaat2009", page: "lectures2.html" },
    { username: "Omar Hmad", password: "govanyrafaat2009", page: "lectures1.html" },

    // أمثلة لإضافة أعضاء جدد:
    // { username: "Ahmed", password: "12345", page: "lectures1.html" },
    // { username: "Sara", password: "sara2024", page: "lectures3.html" },
    // { username: "Ali", password: "ali000", page: "lectures2.html" },
];


// ===============================
//        إعداد تسجيل الدخول
// ===============================
function setupAuth(){
    const loginForm = document.getElementById('loginForm');
    const suModal = document.getElementById('signupModal');
    const goSignUp = document.getElementById('goSignUp');
    const createUser = document.getElementById('createUser');
    const cancelCreate = document.getElementById('cancelCreate');

    if(goSignUp) goSignUp.addEventListener('click', ()=>{ suModal.classList.remove('hidden'); });
    if(cancelCreate) cancelCreate.addEventListener('click', ()=>{ suModal.classList.add('hidden'); });

    document.getElementById("loginForm").addEventListener("submit", function(e){
        e.preventDefault();

        let user = document.getElementById("username").value.trim();
        let pass = document.getElementById("password").value.trim();

        // 🔍 البحث داخل قائمة اليوزرات اليدوية
        let found = manualUsers.find(u => u.username === user && u.password === pass);

        if(found){
            // فتح صفحة اليوزر المحددة مسبقًا
            window.location.href = found.page;
        } else {
            alert("خطأ في اسم المستخدم أو كلمة السر");
        }
    });
}



// ===============================
//  نظام رفع المحاضرات (لو عندك صفحة Upload)
// ===============================
function setupLectures(){
    // لاحقاً لو حبيت أعملك نظام كامل للرفع قولّي
}
