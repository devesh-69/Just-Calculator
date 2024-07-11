
function getAge() {
    const getname = document.getElementById("name").value
    const getYear = document.getElementById("bornDate").value
    const output = document.getElementById("smallopt")

    const currentYear = new Date().getFullYear()
    const currentAGE = currentYear - getYear

    if (getname === '' || getYear === '') {
        alert("Please Enter all Detailes")
    }
    else {
        output.innerHTML = `So ${getname}, your Running Age is ${currentAGE}. IMMPRESSIVE`
    }
}