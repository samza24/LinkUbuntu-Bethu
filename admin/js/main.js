async function loginAdmin() {
    const username = document.getElementById('admin-username').value.trim();
    const pin = document.getElementById('admin-pin').value.trim();
    
    if (!username || !pin) {
        showToast('Please enter username and PIN', 'error');
        return;
    }

    const result = await verifyAdminPin({username, pin});  // from api.js
    
    if (result.success) {
        showToast('Login successful!', 'success');
        // Switch to admin dashboard screen
        document.getElementById('admin-login').classList.remove('active');
        document.getElementById('admin-dashboard').classList.add('active'); // adjust IDs
    } else {
        showToast(result.error || 'Login failed', 'error');
    }
}
