import React from 'react';
import { Header } from "../components/Header/Header";
import { SavedNews } from "../components/SavedNews/SavedNews";
import {Navbar} from "../components/Navbar/Navbar";

export const SavedNewsPage = ({loggedIn, cards}) => {

  return (
    <>
      <Header>
        <Navbar
          className={'navbar_theme_white'}
          theme={'black'}
          bgMenu={'white'}
          loggedIn={loggedIn}
        />
      </Header>
      <div className={'saved-news__info wrapper__content'}>
        <h2 className={'saved-news__title'}>Сохранённые статьи</h2>
        <p className={'saved-news__statistics'}>Грета, у вас 5 сохранённых статей</p>
        <p className={'saved-news__keywords'}>
          По ключевым словам:&nbsp;
          <span className={'saved-news__span'}>Природа, Тайга </span> и <span className={'saved-news__span'}>2-м другим</span>
        </p>
      </div>
      <SavedNews
        cards={cards}
        loggedIn={loggedIn}
      />
    </>
  );
}
