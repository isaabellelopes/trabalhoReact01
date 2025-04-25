import React, { useState, useEffect } from "react";

const EditProduct = ({product, closeEditModal}) => {
    const[editProduct, setEditProduct] = useState({ ...product });

    useEffect(() => {
        setEditProduct({ ...product });
    }, [product]);

    const handleChange = (e) => {
        setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    };

    const saveEdit = async () => {
        if (!editProduct.nome || !editProduct.descricao || !editProduct.peso || !editProduct.preco || !editProduct.dataValidade) {
            return alert("Todos os campos são obrigatórios!");
        }

        try {
            const response = await fetch(`http://localhost:8800/edit/${editProduct.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editProduct),
            });
            console.log(response.text);
            if (response.ok) {
                const data = await response.json();
                setEditProduct(data);
                alert("Produto editado com sucesso!");
                closeEditModal();
            } else {
                alert("Erro ao editar o produto!");
            }
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao editar o produto!");
        }
    };

    return (
        <div>
            <h2>Editar Produto</h2>

            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={editProduct.nome}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Descrição:</label>
                <input
                    type="text"
                    name="descricao"
                    value={editProduct.descricao}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Preço:</label>
                <input
                    type="number"
                    name="preco"
                    value={editProduct.preco}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Peso:</label>
                <input
                    type="number"
                    name="peso"
                    value={editProduct.peso}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Data de Validade:</label>
                <input
                    type="date"
                    name="dataValidade"
                    value={editProduct.dataValidade}
                    onChange={handleChange}
                />
            </div>

            <div>
                <button onClick={saveEdit}>Salvar alterações</button>
                <button onClick={closeEditModal}>Cancelar</button>
            </div>
        </div>
    )
}

export default EditProduct