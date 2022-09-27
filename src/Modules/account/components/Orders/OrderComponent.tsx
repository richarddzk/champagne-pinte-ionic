import React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Stepper, Step, StepButton } from '@mui/material'
import { steps } from '@/Modules/checkout/RecapCheckout'
import { v4 as uuid } from 'uuid'
import { OrdersProps } from './interfaces'
import useStyles from '../../style'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
const CustomizedTables: React.FC<any> = ({ lineItems }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Nom</StyledTableCell>
          <StyledTableCell align="right">Description</StyledTableCell>
          <StyledTableCell align="right">€/Unit</StyledTableCell>
          <StyledTableCell align="right">
            Nombre de bouteille&nbsp;(s)
          </StyledTableCell>
          <StyledTableCell align="right">Total</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lineItems &&
          lineItems.map((lineItem: any) => (
            <StyledTableRow hover key={lineItem.product.title}>
              <StyledTableCell component="th" scope="row">
                {lineItem.product.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {lineItem.product.description}
              </StyledTableCell>
              <StyledTableCell align="right">{lineItem.price}€</StyledTableCell>
              <StyledTableCell align="right">
                {lineItem.quantity}
              </StyledTableCell>
              <StyledTableCell align="right">
                {lineItem.quantity * lineItem.price}€
              </StyledTableCell>
            </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
)

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const OrderComponent: React.FC<OrdersProps> = (props) => {
  const { orders } = props

  const { classes } = useStyles()
  return (
    <div>
      {orders &&
        orders.map((order) => {
          const {
            lineItems,
            id,
            totalPrice,
            createdAt,
            comments,
            facturation,
            address,
          } = order
          return (
            <Accordion>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Grid container justifyContent="space-around" direction="row">
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>
                      {' '}
                      Ref : {id}{' '}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>
                      Créé le {new Date(createdAt).toLocaleDateString()}{' '}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>
                      Status : {comments}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>
                      Montant total : {totalPrice} €
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <CustomizedTables lineItems={lineItems} />

                {/* <Button className={classes.typoOrderLines}>Annuler</Button> */}

                <Grid
                  style={{ textAlign: 'end' }}
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Stepper
                    style={{ marginBottom: 10, marginTop: 10 }}
                    nonLinear
                  >
                    {steps.map((step) => (
                      <Step key={step.label}>
                        <StepButton
                          key={uuid()}
                          style={{ color: '#CCBF90' }}
                          icon={step.icon}
                        >
                          {step.label}
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                  <Grid
                    direction="row"
                    justifyContent="space-between"
                    container
                  >
                    {address && (
                      <Grid item>
                        <Grid direction="row" container>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {address.firstName}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {address.lastName}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          direction="row"
                          justifyContent="space-between"
                          container
                        >
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {address.address_1}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {address.address_2}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid direction="row" container>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {address.state} {address.zip}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {address.country}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {facturation && (
                      <Grid item>
                        <Grid direction="row" container>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {facturation.firstName}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {facturation.lastName}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          direction="row"
                          justifyContent="space-between"
                          container
                        >
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {facturation.address_1}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {facturation.address_2}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid direction="row" container>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {facturation.state} {facturation.zip}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.typo} variant="h6">
                              {facturation.country}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Button className={classes.typoOrderLines}>
                  Contacter Service Apres vente
                </Button>
              </AccordionDetails>
            </Accordion>
          )
        })}
    </div>
  )
}

export default OrderComponent
