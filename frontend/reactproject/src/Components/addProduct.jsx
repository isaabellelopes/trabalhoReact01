import React, {useState} from "react";

const AddProduct = ({closeAddModal, setProducts}) => {
    const [newProduct, setNewProduct] = useState({nome : "", descricao : "", preco : "", peso : "", dataValidade : ""});
    const handleChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value});
    };

    const addUser = async () => {
        if (!newProduct.nome || !newProduct.descricao || !newProduct.peso || !newProduct.preco || !newProduct.dataValidade) {
            return alert("Todos os campos são obrigatórios!");
        }

        try {
            const response = await fetch("http://localhost:8800/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                const data = await response.json();
                setNewProduct(data);
                alert("Produto cadastrado com sucesso!");
                
                closeAddModal();
            } else {
                alert("Erro ao cadastrar o produto!");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao cadastrar o produto!");
        }
    }

    return (
        <div>
            <h1>Adicionar Produto</h1>
            <div>
                <label>Nome:</label>
                <input type="text" name="nome" value={newProduct.nome} onChange={handleChange} />
            </div>
            <div>
                <label>Descrição:</label>
                <input type="text" name="descricao" value={newProduct.descricao} onChange={handleChange} />
            </div>
            <div>
                <label>Preço:</label>
                <input type="number" name="preco" value={newProduct.preco} onChange={handleChange} />
            </div>
            <div>
                <label>Peso:</label>
                <input type="number" name="peso" value={newProduct.peso} onChange={handleChange} />
            </div>
            <div>
                <label>Data de Validade:</label>
                <input type="date" name="dataValidade" value={newProduct.dataValidade} onChange={handleChange} />
            </div>
            <div>
                <button onClick={addUser}>Cadastrar</button>
                <button onClick={closeAddModal}>Cancelar</button>
            </div>
        </div>
    );
}

export default AddProduct