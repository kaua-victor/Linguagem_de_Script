const companies = [
    {name: 'Amazon', founded: 1994,industry:'E-Commerce, Cloud',kind: 'Internet Company'},
    {name: 'Facebook',founded: 2004,industry:'Social',kind: 'Internet Company'},
    {name: 'Alphabe Inc.',founded: 2015,industry:'Search, Cloud, Advertising',kind: 'Internet Company'},
    
]
const show = (array) => {
    array.forEach((element) => console.log(element.name + '...' + element.founded))
}
show(companies)