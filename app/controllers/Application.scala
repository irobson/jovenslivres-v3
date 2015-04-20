package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Site em manutenção! Você pode entrar em contato com o CRJL pelo telefone 47 3322-7241 ou, pelo e-mail: jovenslives.blumenau@gmail.com"))
  }

}
