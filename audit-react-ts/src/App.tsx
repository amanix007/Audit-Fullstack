import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SaveIcon from '@mui/icons-material/Save';
import './App.css'
import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { create_editor, create_site, get_site, update_site } from './requests';
import { EditorInterface, SiteInterface } from './helper/Interfaces';


const siteSchema = yup.object({
  name: yup
    .string().defined(),
  email: yup.string().nullable().notRequired().email(),
  city: yup.string().required(),
  description: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
});


function App() {
  const [open, setOpen] = React.useState(true);
  const [userName, setuserName] = React.useState("");
  const [editor, seteditor] = React.useState<EditorInterface | null>({
    id: 0,
    userName: "admin",
  });

  const [userNameValidation, setuserNameValidation] = React.useState("");
  const [siteData, setsiteData] = React.useState<SiteInterface | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    if (userName === "") {
      setuserNameValidation("User Name is required");
    } else {
      let res = await create_editor(userName);
      if (res) {
        seteditor(res);
        setOpen(false);
      } else {
        setOpen(true);

      }
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "sharetrip",
      city: "dhaka",
      description: "Online Travel Agency",
      latitude: 11.234123412341234,
      longitude: 21.23412341234,
      address: "Banani , dhaka",

    },

    validationSchema: siteSchema,
    // validationSchema: {},

    onSubmit: async (values) => {
      if (siteData === null) {
        let res = await create_site({ ...values, creator_id: editor?.id ? editor.id : 0 });
        if (res) {
          let site = await get_site(res.id);
          setsiteData(site);
        }
      } else {
        // let res = await update_site({ ...values, id: siteData.id, editor_id:  editor.id });
        let res = await update_site({ ...values,id: siteData.id, editor_id: editor?.id ? editor.id : 0 });
        if (res) {
          let site = await get_site(siteData?.id);
          setsiteData(site);
        }
      }
      // alert(JSON.stringify(values, null, 2));

    },
  });



  return (
    <div className="site-entry-app">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEscapeKeyDown={true}
      >
        <DialogTitle id="alert-dialog-title">
          {"Create an editor username"}
        </DialogTitle>
        <div style={{ padding: 16 }}>
          <TextField
            error={userNameValidation !== ""}
            helperText={userNameValidation}
            onChange={(e) => { setuserName(e.target.value) }}
            label="User Name" fullWidth variant="outlined" />
        </div>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>


      <form onSubmit={formik.handleSubmit}>

        <p>Current User: {userName}</p>
        <div className="audit-form">
          <div className="audit-form-header">
            <h1>Site Entry(Audit)</h1>
            <div className="buttons">
              <Button
                // onClick={() => { console.log(formik.values); }}
                type="submit"
                variant="outlined" startIcon={<SaveIcon />}> {siteData === null ? "Save" : "Update"} </Button>
              <Button variant="outlined">Cancel</Button>
            </div>
          </div>
          <div className="form-body">
            <div className="input-field">
              <TextField
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                label="Name" />
            </div>
            <div className="input-field">
              <TextField
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                label="Jurishdiction/City/Region"

                fullWidth variant="outlined" />
            </div>
            <div className="input-field">
              <TextField
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                label="Site Description"

                fullWidth variant="outlined" />
            </div>
            <div className="input-field double-input">
              <TextField
                id="latitude"
                name="latitude"
                value={formik.values.latitude}
                onChange={formik.handleChange}
                error={formik.touched.latitude && Boolean(formik.errors.latitude)}
                helperText={formik.touched.latitude && formik.errors.latitude}
                label="Latitude"

                fullWidth variant="outlined" />
              <TextField
                id="longitude"
                name="longitude"
                value={formik.values.longitude}
                onChange={formik.handleChange}
                error={formik.touched.longitude && Boolean(formik.errors.longitude)}
                helperText={formik.touched.longitude && formik.errors.longitude}
                label="Longitude"

                fullWidth variant="outlined" />

            </div>
          </div>

          <div className="audit-log">
            <h4>Audit Log</h4>
            <ul>
              <li>Created by {siteData?.creatorUserName} on {siteData?.createdAt}</li>
              <li>Updated by {siteData?.editorUserName} on {siteData?.updatedAt}</li>
            </ul>
          </div>
        </div>
      </form>



    </div>
  )
}

export default App
