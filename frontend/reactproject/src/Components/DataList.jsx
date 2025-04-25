import React from "react";

const DataList = (props) => {
    const data = props.data;

    return (
        <div>
            <div>
                <ul className="list">
                    {data.map((item) => (
                        <li key={`product-${item.id}`} className="li-list">
                            <span>Nome: </span>{item.nome}<br />
                            <p>Preço: {Number(item.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                            <span>Validade: </span>{item.dataValidade}<br />
                            <button className="btn-list info" onClick={() => props.clicked(item)}>
                                Mais detalhes
                            </button>
                            <button className="btn-list edit" onClick={() => props.openEditModal(item)}>
                                Editar
                            </button>
                            <button className="btn-list delete" onClick={() => props.deleteProduct(item.id)}>
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>   
    )
}

export default DataList