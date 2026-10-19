import { useState } from "react";
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';
import BackButton from "../../../shared/components/BackButton";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { cadastrar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_VOTO } from "../../voto/service/votoService";

export default function VotoForm() {

    const [voto, setVoto] = useState({
        nomeEleitor: "",
        numeroRegistroEleitoral: "",
        dataVotacao: "",
        numeroCandidatoDepFederal: "",
        numeroCandidatoDepEstadual: "",
        numeroCandidatoSenador: "",
        numeroCandidatoGovernador: "",
        numeroCandidatoPresidente: ""
    });

    async function salvar() {
    
        try {
            await cadastrar(MAPPING_CONTROLLER_VOTO, voto);
            toast.success("Voto cadastrado com sucesso!");
        } catch (erro) {
            toast.error("Erro ao cadastrar voto.");
        }
    }

    return (

        <div>

            <Menu />

            <Breadcrumbs items={[
                { label: "Voto" },
                { label: "Cadastrar" }
            ]} />

            <div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>

                <div className="overflow-x-auto shadow-sm">

                    <div className="flex items-center justify-between mb-6" style={{ marginTop: '20px', marginLeft: '10px', marginRight: '10px' }}>
                        <h1 className="text-3xl font-bold text-gray-800">
                            Votação 2026
                        </h1>
                    </div>

                    <div className="divider divider-info" />

                    <div className="overflow-x-auto" style={{ padding: '30px' }}>
                        
                        <form>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px' }}>
                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="nome">Eleitor</label>
                                        <input
                                            type="text"
                                            id="eleitor"
                                            className="input input-bordered w-full"
                                            value={ voto.nomeEleitor}
                                            onChange={(e) =>
                                                setVoto({ ...voto, nomeEleitor: e.target.value })
                                            }
                                        />
                                    </fieldset>
                                </div>

                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px' }}>
                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="cpf">Registro</label>
                                        <input
                                            type="text"
                                            id="registro"
                                            className="input input-bordered w-full"
                                            value={ voto.numeroRegistroEleitoral}
                                            onChange={(e) =>
                                                setVoto({ ...voto, numeroRegistroEleitoral: e.target.value })
                                            }
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px', width: '400px' }}>
                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="foneCelular">Número Candidato Dep. Federal</label>
                                        <IMaskInput
                                            mask="000000"
                                            className="input input-bordered w-full"
                                            value={ voto.numeroCandidatoDepFederal}
                                            onChange={(e) =>
                                                setVoto({ ...voto, numeroCandidatoDepFederal: e.target.value })
                                            }
                                        />
                                    </fieldset>
                                </div>

                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px', width: '400px' }}>
                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="foneCelular">Número Candidato Dep. Estadual</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={ voto.numeroCandidatoDepEstadual}
                                            onChange={(e) =>
                                                setVoto({ ...voto, numeroCandidatoDepEstadual: e.target.value })
                                            }
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px', width: '400px' }}>
                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="foneCelular">Número Candidato Senador</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={ voto.numeroCandidatoSenador}
                                            onChange={(e) =>
                                                setVoto({ ...voto, numeroCandidatoSenador: e.target.value })
                                            }
                                        />
                                    </fieldset>
                                </div>

                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px', width: '400px' }}>
                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="foneCelular">Número Candidato Governador</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            value={ voto.numeroCandidatoGovernador}
                                            onChange={(e) =>
                                                setVoto({ ...voto, numeroCandidatoGovernador: e.target.value })
                                            }
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            <div className="card rounded-box grid grow p-8" style={{ padding: '30px', width: '400px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="foneCelular">Número Candidato Presidente</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={ voto.numeroCandidatoPresidente}
                                        onChange={(e) =>
                                            setVoto({ ...voto, numeroCandidatoPresidente: e.target.value })
                                        }
                                    />
                                </fieldset>
                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px' }}>

                                    <div style={{ marginTop: '50px', textAlign: 'left' }}>
                                        <BackButton destino="/cliente" />
                                    </div>

                                </div>
                                <div className="card rounded-box grid grow p-8" style={{ padding: '30px' }}>

                                    <div style={{ marginTop: '50px', textAlign: 'right' }}>
                                        <SaveButton save={() => salvar()} />
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    );
}