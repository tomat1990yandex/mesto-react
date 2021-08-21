import React from "react";

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__box-pic">
                        <img className="profile__avatar" src="../images/varlamov.jpg" alt="Аватар профиля"></img>
                        <button className="profile__change-btn" type="button"
                                aria-label="Изменить аватар пользователя"></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__box-title">
                            <h1 className="profile__name">Илья Варламов</h1>
                            <button type="button" className="profile__edit" id="ButtonEdit"
                                    aria-label="Кнопка редактировать"></button>
                        </div>
                        <p className="profile__profession">Блогер, урбанист, путешественник</p>
                    </div>
                </div>
                <button type="button" className="profile__add" id="ButtonAdd" aria-label="Кнопка добавить"></button>
            </section>

            <section className="elements">
            </section>
        </main>
    );
}

export default Main;