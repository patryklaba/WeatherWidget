import Icons from './icons.json';

function firstLetterUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getIconImage(iconId) {
    if (iconId === '') {
        return '';
    }
    const prefix = "wi wi-";
    let iconImg = Icons[iconId].icon;

    if (!(iconId > 699 && iconId < 800) && !(iconId > 899 && iconId < 1000)) {
        iconImg = 'day-' + iconImg;
    }

    iconImg = prefix + iconImg;
    return iconImg;
}

export {firstLetterUpperCase, getIconImage};


