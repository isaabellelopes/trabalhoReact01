import './App.css';
import DataList from './Components/DataList';
import AddProduct from './Components/addProduct';
import EditProduct from './Components/editProduct';
import { useState, useEffect } from 'react';


function App() {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [itemClicked, setItemClicked] = useState(null);
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const clicked = (item) => {
        setModalIsOpen(true);
        setItemClicked(item);
    };

    const getUsers = () => {
        fetch("http://localhost:8800")
        .then(res => res.json())
        .then(data => setData(data))
        .catch((error) =>{
            console.log(error);
            alert("Ocorreu um erro ao carregar os dados!");
        });
    }

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8800/delete/${id}`, {
                method: "DELETE",
            });
            
            if (response.ok) {
                setData(data.filter(item => item.id !== id));
                alert("Produto excluído com sucesso!");
            } else {
                alert("Erro ao excluir o produto!");
            }
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao excluir o produto!");
        }
    }

    const closeModal = () => {
        setModalIsOpen(false);
        setItemClicked(null);
    }

    const openAddModal = () => {
        setAddModalIsOpen(true);
    }

    const closeAddModal = () => {
        setAddModalIsOpen(false);
        getUsers();
    }

    const openEditModal = (product) => {
        setEditModalIsOpen(true);
        setItemClicked(product);
    }

    const closeEditModal = () => {
        setEditModalIsOpen(false);
        getUsers();
    }

    return (
        <div>
            <div className='header-container'>
                <h1>Lista de Produtos, feito por Isabelle Lopes</h1>
                <div className='btn-wrapper'>
                    <button onClick={openAddModal} className='btn-cadastrar'>Cadastrar Produto</button>
                </div>
            </div>
            <DataList clicked={clicked} data={data} setData={setData} deleteProduct={deleteProduct} openEditModal={openEditModal}/>
            {modalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h1>Detalhes do Produto</h1>
                        <p><strong>Nome:</strong> {itemClicked.nome}</p>
                        <p><strong>Descricao:</strong> {itemClicked.descricao}</p>
                        <p><strong>Preço:</strong> {Number(itemClicked.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <p><strong>Peso:</strong> {itemClicked.peso}</p>
                        <p><strong>Data de validade:</strong> {itemClicked.dataValidade}</p>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
            {addModalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <AddProduct closeAddModal={closeAddModal} />
                    </div>
                </div>
            )}
            {editModalIsOpen && (
                <div className="modal">
                    <div className='modal-content'>
                        <EditProduct product={itemClicked} closeEditModal={closeEditModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
