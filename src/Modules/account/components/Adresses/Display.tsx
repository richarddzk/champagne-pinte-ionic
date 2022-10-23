/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import {
  Grid,
  Typography,
  Divider,
  styled,
  Checkbox,
  alpha,
  IconButton,
  Toolbar,
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide
} from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Logout } from '@mui/icons-material'
import { v4 as uuid } from 'uuid'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { TransitionProps } from '@mui/material/transitions'
import { useMutation } from '@apollo/client'
import { SimpleDialogProps } from '@/Main/Menu/CartMenu/CartMenu'
import { user_data_customers_addresses as UserAdresses } from '@/Modules/account/__generated__/user'
import { DEL_ADDRESS } from './requests'
import Change from './Change'
import useStyles from '../../style'

export interface DisplayProps {
  addresses: UserAdresses[]
  customerId: string
  refetch: any
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.mode === 'light' ? '#000' : '#fff'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))
export const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
)

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selected, open, classes, refetch, setSelected } = props
  const [deleteAddress] = useMutation(DEL_ADDRESS)
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.typo}>
        {' Voulez vous vraiment supprimer le ou les adresse(s) selectionnée(s) ?'}
      </DialogTitle>

      <DialogActions>
        <Button
          className={classes.typo}
          startIcon={<KeyboardReturnIcon fontSize="small" />}
          onClick={handleClose}
        >
          Non
        </Button>
        <Button
          key={uuid()}
          startIcon={<Logout fontSize="small" />}
          onClick={() => {
            selected &&
              selected.forEach(async (select) => {
                await deleteAddress({
                  variables: {
                    where: {
                      id: select
                    }
                  }
                })
              })
            refetch && refetch()
            setSelected && setSelected([])
            handleClose()
          }}
          className={classes.typo}
        >
          Oui
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function EnhancedTableToolbar(props: any) {
  const { numSelected, classes, handleUpdate, handleAdd, handleDel } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          className={classes.typoHeader}
          color="primary"
        >
          {numSelected} Adresse(s) selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          className={classes.typoHeader}
          color="primary"
        >
          Adresses
        </Typography>
      )}
      <Tooltip title="Ajouter une nouvelle adresse">
        <IconButton onClick={handleAdd}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Tooltip>
      {numSelected > 1 ? (
        <Tooltip title="Supprimer les adresses cellectionées">
          <IconButton onClick={handleDel}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        numSelected !== 0 && (
          <>
            <Tooltip title="Change">
              <IconButton onClick={handleUpdate}>
                <ChangeCircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={handleDel}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )
      )}
    </Toolbar>
  )
}

function AdressesTable({ addresses, isSelected, handleClick, update }: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {update && <StyledTableCell align="right"> </StyledTableCell>}
            <StyledTableCell align="right">Nom</StyledTableCell>
            <StyledTableCell align="right">Prenom</StyledTableCell>
            <StyledTableCell align="right">Rue et n°</StyledTableCell>
            <StyledTableCell align="right">Complément</StyledTableCell>
            <StyledTableCell align="right">Ville</StyledTableCell>
            <StyledTableCell align="right">Code postal</StyledTableCell>
            <StyledTableCell align="right">Région</StyledTableCell>
            <StyledTableCell align="right">Pays</StyledTableCell>
            <StyledTableCell align="right">N° Téléphone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.length > 0 &&
            addresses.map((adresse: any) => {
              const isItemSelected = isSelected(adresse.id)
              const labelId = `enhanced-table-checkbox-${adresse.id}`

              return (
                <StyledTableRow
                  hover
                  onClick={(event) => handleClick(event, adresse.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={adresse.id}
                  selected={isItemSelected}
                >
                  {update && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                  )}
                  <StyledTableCell align="right">{adresse.lastName}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.firstName}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.address_1}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.address_2}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.city}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.zip}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.state}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.country}</StyledTableCell>
                  <StyledTableCell align="right">{adresse.phone}</StyledTableCell>
                </StyledTableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Display: React.FC<DisplayProps> = (props) => {
  const { classes } = useStyles()

  const { addresses, customerId, refetch } = props
  const [selected, setSelected] = React.useState<string[]>([])
  const [openDel, setOpenDel] = React.useState(false)

  const [updating, setUpdating] = React.useState<boolean>(false)
  const [adding, setAdding] = React.useState<boolean>(false)
  const handleClick = (_name: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: string) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }
  let currentUpdating = {
    isDefault: true
  } as UserAdresses

  selected &&
    selected[0] &&
    addresses.forEach((address) => {
      if (address.id === selected[0]) {
        currentUpdating = address
      }
    })
  const handleUpdate = () => {
    setUpdating(!updating)
  }
  const handleAdd = () => {
    setUpdating(!updating)

    setAdding(!adding)
  }
  const handleClickOpen = () => {
    setOpenDel(true)
  }

  const handleClose = () => {
    setOpenDel(!openDel)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1
  return (
    <Grid style={{ padding: 5 }} container direction="column">
      <SimpleDialog selected={selected} open={openDel} onClose={handleClose} classes={classes} />
      <Grid
        style={{ textAlign: 'start', width: '100%' }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {updating && selected.length < 2 && (
          <Change
            address={currentUpdating as UserAdresses}
            setUpdating={setUpdating}
            setSelected={setSelected}
            customerId={customerId}
            refetch={refetch}
            adding={adding}
            setAdding={setAdding}
            isFacturation={false}
          />
        )}
        <>
          <EnhancedTableToolbar
            numSelected={selected.length}
            classes={classes}
            handleUpdate={handleUpdate}
            handleAdd={handleAdd}
            handleDel={handleClickOpen}
            refetch={refetch}
            setSelected={setSelected}
          />
          <AdressesTable
            addresses={addresses}
            isSelected={isSelected}
            handleClick={handleClick}
            update
          />
          {addresses.length === 0 && (
            <Grid
              className={classes.center}
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
            >
              <Divider
                textAlign="center"
                variant="middle"
                style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
              />
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
                className={classes.typoHeader}
                color="primary"
              >
                Vous n'avez aucune adresses renseignées
              </Typography>
              <Divider
                textAlign="center"
                variant="middle"
                style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
              />
            </Grid>
          )}
        </>

        <Grid className={classes.center} justifyContent="center" alignItems="center" item xs={12}>
          <Divider
            textAlign="center"
            variant="middle"
            style={{ marginTop: 50, marginBottom: 50, width: '95%' }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Display
