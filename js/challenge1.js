window.addEventListener("dblclick", function() {
    const toggleCheckbox = window.getElementById("toggle");
    const emailBox = window.getElementById("emailBox");

    function toggleEmailBox() {
        emailBox.classList.toggle("hidden");
    }

    toggleCheckbox.addEventListener("click", function() {
        toggleEmailBox();
    });
});