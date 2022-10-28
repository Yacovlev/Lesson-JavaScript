var controleCampo = 1;
function adicionarCampo() {
    controleCampo++;
    document.getElementById('formulario').insertAdjacentHTML('beforeend', '<div class="form-group"><input type="text" name="name '+ controleCampo +'" placeholder="Your Name"> <input type="text" name="email '+ controleCampo +'" placeholder="Your Email" /> <input type="text" name="phone '+ controleCampo +'" placeholder="Your phone"></div>');
}