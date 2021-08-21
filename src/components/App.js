import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
    return (
        <div className="page">
            <Header/>
            <Main/>
            <Footer/>

            <div className="popup popup_type_image" id="popupImg">
                <div className="popup__image-container">
                    <button type="button" className="popup__close" id="ButtonCloseImg"
                            aria-label="Кнопка закрыть"></button>
                    <img className="popup__image" id="popupImgLink" src="#" alt="Фото"></img>
                    <h3 className="popup__image-title" id="popupImgTitle"></h3>
                </div>
            </div>

            <div className="popup popup_type_confirm" id="popupCnfrm">
                <div className="popup__container">
                    <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
                    <form action="#" className="popup__form" id="popupFormCnfrm" method="post" name="profileInfoAdd"
                          noValidate>
                        <button type="submit" className="popup__save" id="popupSaveCnfrm"
                                aria-label="Подтвердить удаление">
                            Да
                        </button>
                    </form>
                    <button type="button" className="popup__close" id="ButtonCloseCnfrm"
                            aria-label="Кнопка закрыть"></button>
                </div>
            </div>

            <div className="popup popup_type_add-card" id="popupAdd">
                <div className="popup__container">
                    <h3 className="popup__title">Новое место</h3>
                    <form action="#" className="popup__form popup__form_add" id="popupFormAdd" method="post"
                          name="profileInfoAdd"
                          noValidate>
                        <input type="text" className="popup__input" id="card-name-input" name="name" minLength="2"
                               maxLength="30"
                               placeholder="Название" required></input>
                        <span className="popup__field-error popup__name-add-error" id="card-name-input-error"></span>
                        <input type="url" className="popup__input" id="card-link-input" name="link"
                               placeholder="Ссылка на картинку"
                               required></input>
                        <span className="popup__field-error popup__link-add-error" id="card-link-input-error"></span>
                        <button type="submit" className="popup__save popup__save_inactive" id="popupSaveAdd"
                                aria-label="Кнопка создать">
                            Создать
                        </button>
                    </form>
                    <button type="button" className="popup__close" id="ButtonCloseAdd"
                            aria-label="Кнопка закрыть"></button>
                </div>
            </div>

            <div className="popup popup_type_edit" id="popupEdit">
                <div className="popup__container">
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <form action="#" className="popup__form popup__form_edit" id="popupFormEdit" method="post"
                          name="profileInfoEdit"
                          noValidate>
                        <input type="text" className="popup__input" id="name-input" name="name" minLength="2"
                               maxLength="40"
                               placeholder="Имя" required></input>
                        <span className="popup__field-error popup__name-error" id="name-input-error"></span>
                        <input type="text" className="popup__input" id="profession-input" name="about" minLength="2"
                               maxLength="200" placeholder="Профессия" required></input>
                        <span className="popup__field-error popup__profession-error" id="profession-input-error"></span>
                        <button type="submit" className="popup__save popup__save_inactive" id="popupSaveEdit"
                                aria-label="Кнопка сохранить">
                            Сохранить
                        </button>
                    </form>
                    <button type="button" className="popup__close" id="ButtonCloseEdit"
                            aria-label="Кнопка закрыть"></button>
                </div>
            </div>

            <div className="popup popup_type_avatar-edit" id="popupAvatarEdit">
                <div className="popup__container">
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form action="#" className="popup__form popup__form_edit" id="popupFormAvatarEdit" method="post"
                          name="profileAvatarEdit"
                          noValidate>
                        <input type="url" className="popup__input" id="change-avatar-input" name="link"
                               placeholder="Ссылка на картинку"
                               required></input>
                        <span className="popup__field-error popup__avatarlink-error"
                              id="change-avatar-input-error"></span>
                        <button type="submit" className="popup__save popup__save_inactive" id="popupSaveAvatarEdit"
                                aria-label="Кнопка сохранить">
                            Сохранить
                        </button>
                    </form>
                    <button type="button" className="popup__close" id="ButtonCloseAvatarEdit"
                            aria-label="Кнопка закрыть"></button>
                </div>
            </div>
        </div>
    );
}

export default App;
