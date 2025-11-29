// ملف جافاسكربت أساسي: تسجيل دخول بسيط، تخزين المستخدمين، رفع محاضرات (رابط أو ملف صغير)


document.addEventListener('DOMContentLoaded', ()=>{
// سنة الفوتر
const y = new Date().getFullYear();
const elYear = document.getElementById('year'); if(elYear) elYear.textContent = y;


// التعامل مع صفحات متعددة
if(document.getElementById('loginForm')) setupAuth();
if(document.getElementById('uploadLec')) setupLectures();
if(document.getElementById('logoutBtn')){
document.getElementById('logoutBtn').addEventListener('click', ()=>{localStorage.removeItem('currentUser');location.href='index.html'});
}
});


// --- إدارة المستخدمين ---
const DEFAULT_ADMIN = {user:'Giovanny Rafaat', pass:'govanyrafaat2009'};


function getUsers(){
try{ return JSON.parse(localStorage.getItem('gh_users')||'[]') }catch(e){return []}
}
function saveUsers(u){ localStorage.setItem('gh_users',JSON.stringify(u)) }


function setupAuth(){
const loginForm = document.getElementById('loginForm');
const suModal = document.getElementById('signupModal');
const goSignUp = document.getElementById('goSignUp');
const createUser = document.getElementById('createUser');
const cancelCreate = document.getElementById('cancelCreate');


goSignUp.addEventListener('click', ()=>{ suModal.classList.remove('hidden'); });
cancelCreate.addEventListener('click', ()=>{ suModal.classList.add('hidden'); });

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    // 🔹 جلب كل اليوزرات المخزنة
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔹 لو localStorage فاضي، ضيف أول حساب أساسي
    if(users.length === 0) {
        users.push({ username: "Giovanny Rafaat", password: "govanyrafaat2009" });
        localStorage.setItem("users", JSON.stringify(users));
    }

    // 🔹 تحقق من وجود اليوزر
    let found = users.find(u => u.username === user && u.password === pass);

    if(found){
        window.location.href = "lectures.html";
    } else {
        alert("خطأ في اسم المستخدم أو كلمة السر");
    }
});

