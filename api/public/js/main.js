const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach(el =>{
    el.addEventListener('click', deleteHabit)
})





async function deleteHabit(){
    const habitId = this.parentNode.parentNode.dataset.id
    
    console.log(habitId)
    
    try {
        const response = await fetch('habits/deleteHabit', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'habitId' : habitId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}