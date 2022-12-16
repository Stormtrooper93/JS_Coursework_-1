`use strict`;

console.log("Time measure")


// Основна ідея додатку
// Веб сторінка на якій юзер може обрати в першому інпуті дату, потім в другому інпуті дату - і отримати проміжок часу між цими датами.

// Особливості додатку
// 1. Тільки після того як юзер обрав одну дату в першому інпуті, він може обрати дату в другому інпуті яка йде не раніше дати з першого інпуту і навпаки

// 2. Юзер може обрати пресети проміжків часу:
// - 'тиждень'
// - 'місяць'

// 3. Юзер може обрати опції:
// - 'Всі дні'
// - 'Будні дні'
// - 'Вихідні дні'

// 4. Юзер може вибрати опції:
// - 'Порахувати кількість днів'
// - 'Порахувати кількість годин'
// - 'Порахувати кількість хвилин'
// - 'Порахувати кількість секунд'

// 5. Юзер може зайти в додаток і побачити, якщо вони є, останні 10 результатів які він рахував у вигляді таблиці (стартова дата, кінцева дата, і який результат виміру)
//  - Для цього використати локал сторадж

// 6. Юзер має мати можливість комфортно працювати з мобільного телефона з цим додатком
// - Мається на увазі що має бути передбачена мобільна версія сайту

// 7. Юзер має мати можливість перейти на реальну сторінку додатку в інтернеті
// - Мається на увазі що додаток розміщується на Github pages

const firstDate = document.querySelector('.first-date');
const secondDate = document.querySelector('.second-date');



let durationBetweenDates = (firstDate, secondDate, format) => {
    
    seconds = 1000;
    minutes = 1000 * 60;
    hours = 1000 * 60 * 60;
    days = 1000 * 60 * 60 * 24;

    if (format === 'seconds') {
        return Math.abs((new Date(secondDate) - new Date(firstDate)) / seconds) + format;
    }
    else if (format === 'minutes') {
        return Math.abs((new Date(secondDate) - new Date(firstDate)) / minutes) + format;
    }
    else if (format === 'hours') {
        return Math.abs((new Date(secondDate) - new Date(firstDate)) / hours) + format;
    }
    else if (format === 'days') {
        return Math.abs((new Date(secondDate) - new Date(firstDate)) / days) + format;
    };
};