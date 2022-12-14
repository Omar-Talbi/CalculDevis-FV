import React,{useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios'

const style = {
  display: "flex",
  flexWrap: "wrap",
  position: "absolute",
  justifyContent: "space-between",
  contentAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  borderRadius: "25px",
  p: 4,
  overflowY: "auto",
  overflowX: "hidden",
};

function ModalAjoutProfiler({attributID,handleCloseProfiler}) {

    const [profilerReference, setProfilerReference] = useState({ reference: "" })

    const [profilerFormule, setProfilerFormule] = useState({ formule: "" })

    const handleChangeInputProfilerReference = (e) => {
    const { name, value } = e.target;
    setProfilerReference({ ...profilerReference.reference, [name]: value });
  };

  const handleChangeInputProfilerFormule = (e) => {
    const { name, value } = e.target;
    setProfilerFormule({ ...profilerFormule.formule, [name]: value });
  };

  const ajoutProfiler = (e) => {

    axios.post("http://localhost:4000/app/Ajout_profiler", { reference: profilerReference.reference, formule: profilerFormule.formule, attribut: attributID })
      .then((response) => console.log(response.data));
      handleCloseProfiler()
    e.preventDefault()
  };
  return (
    <Box sx={style}>
          <table className="table_Modal">
            <tbody>
              <tr className="tr_table_Modal">
                <td className="td_table_Modal">
                  <TextField
                    label="Filled success"
                    variant="filled"
                    color="success"
                    focused
                    value={profilerReference.reference}
                    name="reference"
                    onChange={handleChangeInputProfilerReference}
                  />
                  <TextField
                    label="Filled success"
                    variant="filled"
                    color="success"
                    focused
                    value={profilerFormule.formule}
                    name="formule"
                    onChange={handleChangeInputProfilerFormule}
                  />
                </td>

              </tr>
              <tr className="tr_table_Modal">
                <td className="td_table_Modal">
                  <Button
                    onClick={() => ajoutProfiler()}
                    size="large"
                    variant="contained"
                    color="success"
                  >
                    Ajouter Profiler
                  </Button>
                </td>
                <td className="td_table_Modal" onClick={handleCloseProfiler}>
                  <h2 className="exit_modal">x</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
  )
}

export default ModalAjoutProfiler