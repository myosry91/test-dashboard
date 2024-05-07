import React, { FC } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../context/LanguageContext";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

const Row4: FC = () => {
  const theme = useTheme();

  const [t, i18n] = useTranslation("global");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const rows: GridRowsProp = [
    {
      id: 1,
      col1: t("table.active"),
      col2: "16/05/2021",
      col3: "16/05/2021",
      col4: "152855",
      col5: "1",
    },
    {
      id: 2,
      col1: t("table.disactive"),
      col2: "16/05/2021",
      col3: "16/05/2021",
      col4: "152855",
      col5: "2",
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "col1",
      headerName: t("table.status"),
      flex: 1,
      align: "center",
      headerAlign: "center",
      // renderCell: ({ row: { col1 } }) => {
      //   console.log(col1);
      //   return(
      //   <Box sx={{ background: "red", display: "flex", justifyContent:"center", alignItems:"center" }}>
      //     <Typography sx={{width: "80px"}}>{col1}</Typography>
          
      //   </Box>)
      // },
    },

    {
      field: "col2",
      headerName: t("table.exitdate"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col3",
      headerName: t("table.dateofentry"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col4",
      headerName: t("table.unitsymbol"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col5",
      headerName: t("table.id"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Box sx={{maxWidth: "95vw"}}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Row4;
