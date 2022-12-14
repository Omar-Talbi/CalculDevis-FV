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
function ModalAjoutSerie({sousArticleID,handleCloseSerie}) {

    const [serie, setSerie] = useState({ Nom: "" });

    const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSerie({ ...serie, [name]: value });
  };

  const ajoutSerie = (e) => {

    axios.post("http://localhost:4000/app/Ajout_serie", { Nom: serie.Nom, sousArticle: sousArticleID })
      .then((response) => console.log(response.data));
    handleCloseSerie()
    e.preventDefault()
  };
  return (
    <Box sx={style}>


                <p className="td_table_Modal">
                  <TextField
                    label="Filled success"
                    variant="filled"
                    color="success"
                    focused
                    value={serie.Nom}
                    name="Nom"
                    onChange={handleChangeInput}
                  />
                </p>
                <p className="td_table_Modal">
                  <Button
                    onClick={ajoutSerie}
                    size="large"
                    variant="contained"
                    color="success"
                  >
                    Ajouter Serie
                  </Button>
                </p>

  
                <p className="td_table_Modal" onClick={handleCloseSerie}>
                  <h2 className="exit_modal">x</h2>
                </p>


        </Box>
  )
}

export default ModalAjoutSerie