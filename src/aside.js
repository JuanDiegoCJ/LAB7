const Aside = () => {
    return <aside>
        <form>
  <div class="mb-3">
  <br/>
  <br/>
    <label for="exampleInputEmail1">¿Eres nuevo?, Regístrate en Tech-Phone y sé parte de esta comunidad</label>
    <br/>
    <br/>
    <label for="exampleInputEmail1">GMAIL</label> <i data-feather="mail"></i>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gmail"/>
    <small id="emailHelp" class="form-text text-muted">                                      </small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">CONTRASEÑA</label> <i data-feather="key"></i>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
  </div>
  <br/>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Aceptar las Políticas y Condiciones de Privacidad</label>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
    <label class="form-check-label" for="exampleCheck2">Aceptar los Contratos y Ofertas de las Compañías Telefónicas.</label>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck3"/>
    <label class="form-check-label" for="exampleCheck3">Aceptar las Cookies de Terceros.</label>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">REGISTRAR</button>
</form>
    </aside>;
}
export default Aside;