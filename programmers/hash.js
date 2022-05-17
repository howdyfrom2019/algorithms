function solution(genres, plays) {
    const result = {};
    genres.forEach((genre, i) => {
        result[genre] = plays[i]
    });
    console.log(result);
}