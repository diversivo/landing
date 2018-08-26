// const   campos = document.getElementById('campos'),
//         name = document.getElementById('name'),
//         email = document.getElementById('email'),
//         phone = document.getElementById('phone'),
//         idea = document.getElementById('idea'),
//         label = document.createElement('div')

// const clickForm = (event) => {
//     let captureId = event.currentTarget.id
//     let placeholder = event.currentTarget.placeholder
//     label.id = 'label'
//     label.classList.add('label')
//     label.innerHTML = `<pre>${placeholder}</pre>`
//     campos.insertBefore(label, event.currentTarget)
// }

// const leaveForm = (event) => {
//     let capture = event.currentTarget
//     let labelRemove = label.remove()
//     if(capture.value === ''){
//         label.remove()
//     } else {
//         console.log('nop')
//     }
// }

// name.addEventListener('click', clickForm, true);
// email.addEventListener('click', clickForm, true);
// phone.addEventListener('click', clickForm, true);
// idea.addEventListener('click', clickForm, true);

// name.addEventListener('mouseleave', leaveForm, true);
// email.addEventListener('mouseleave', leaveForm, true);