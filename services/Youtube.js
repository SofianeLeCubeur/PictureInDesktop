function toSeconds(time) {
    let seconds = 0;
    let regex = /([0-9]+d)?([0-9]+h)?([0-9]+m)?([0-9]+s)?/g;
    let parsed = regex.exec(time);

    seconds += (parsed[1] ? parseInt(parsed[1].replace('d', '')) : 0);
    seconds += 3600 * (parsed[2] ? parseInt(parsed[2].replace('h', '')) : 0);
    seconds += 60 * (parsed[3] ? parseInt(parsed[3].replace('m', '')) : 0);
    seconds += (parsed[4] ? parseInt(parsed[4].replace('s', '')) : 0);

    return seconds;
}

module.exports = {
    category: 'Default',
    getStreamURL: function getStreamURL(inputURL) {
        const regex = /^((?:https?:)?\/\/)?((?:www|m|gaming|music)\.)?((?:youtube\.com|youtu\.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g;
        let result = regex.exec(inputURL);

        return result && result[5] ? `https://www.youtube.com/embed/${result[5]}${result[6] || ''}` : undefined
    },
    controlsYOffset: 30
};
