export type Basics = {
    name: string,
    middleName: string,
    surname: string,
    description: string,
    companyName: string,
    companyUrl: string,
    position: string,
    country: string,
    city: string
};

export function getBasics(): Promise<Basics> {
    return fetch('http://localhost:8080/portfolio/admin/v1/basics')
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json()) as Promise<Basics>;
}
