<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Registrasi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>

<div class="form-container">
    <h2>Form Registrasi</h2>

    <form id="registerForm" method="POST" action="/register">
        @csrf
        <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" name="name" id="name" >
        </div>

        <div class="form-group">
            <label for="dob">Tanggal Lahir</label>
            <input type="date" name="dob" id="dob">
        </div>

        <div class="form-group">
            <label for="gender">Jenis Kelamin</label>
            <select name="gender" id="gender">
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
            </select>
        </div>

        <div class="form-group">
            <label for="class">Kelas</label>
            <input type="text" name="class" id="class" >
        </div>

        <div class="form-group">
            <label for="major">Jurusan</label>
            <input type="text" name="major" id="major" >
        </div>

        <div class="form-group">
            <label for="address">Alamat</label>
            <textarea name="address" id="address" placeholder="Alamat lengkap" rows="4"></textarea>
        </div>

        <div class="form-group">
            <label for="email">Alamat Email</label>
            <input type="email" name="email" id="email" >
        </div>

        <button class="btn" type="submit">Daftar</button>
    </form>
</div>


<div id="successModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Registrasi Berhasil!</h2>
        </div>
        <div class="modal-body">
            <p>Terima kasih telah mendaftar.</p>
        </div>
        <button class="modal-close" onclick="closeModal()">Tutup</button>
    </div>
</div>

<script>
    // Validasi Form
    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const classField = document.getElementById("class").value.trim();
        const major = document.getElementById("major").value.trim();
        const address = document.getElementById("address").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !dob || !gender || !classField || !major || !address || !email) {
            alert("Semua field harus diisi!");
            return false;
        }

        return true;
    }


    function showModal() {
        const modal = document.getElementById("successModal");
        modal.style.display = "block"; 
    }

    
    function closeModal() {
        const modal = document.getElementById("successModal");
        modal.style.display = "none"; 
    }

    
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();  

        
        if (validateForm()) {
          
            showModal();
            
            
            setTimeout(function() {
                document.getElementById('registerForm').submit(); 
            }, 2000);  
        }
    });
</script>

</body>
</html>
