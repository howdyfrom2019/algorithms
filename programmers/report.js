const loop = (id_list, result, data) => {
    result.forEach((d_result, i) => {
        if (d_result.reporter === data.split(' ')[0]) {
            d_result.scammer.push(data.split(' ')[1]);
            return result;
        }
    });
    return [...result, { reporter: data.split(' ')[0], scammer: data.split(' ')[1] }];
};

function solution() {
    const id_list = ["a b", "b c", "c a"];
    const result = [];
    id_list.forEach((data) => {
        loop(id_list, result, data);
    });
    id_list.indexOf("jj");
    const list = [
        { id: 'muzi', report: 1 },
        { id: 'frodo', report: 2 },
        { id: 'apeach', report: 0 },
        { id: 'neo', report: 2 }
    ];
}