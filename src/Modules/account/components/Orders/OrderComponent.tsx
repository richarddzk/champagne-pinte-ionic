import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
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
import { Stepper, Step, StepButton, TypeBackground } from '@mui/material'
import { steps } from '@/Modules/checkout/RecapCheckout'
import { v4 as uuid } from 'uuid'
import useScreen from '@/Utils/hooks/useScreen'
import { OrdersProps } from './interfaces'
import useStyles from '../../style'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(() => ({
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))
const CustomizedTables: React.FC<any> = ({ lineItems }) => {
  const { isTablette } = useScreen()
  const { classes } = useStyles()

  return (
    <TableContainer classes={classes.gridOrders} component={Paper}>
      <Table
        size={isTablette ? 'small' : undefined}
        x_aria-label="customized table"
        component={Paper}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom</StyledTableCell>
            <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
              Description
            </StyledTableCell>
            <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
              €/Unit
            </StyledTableCell>
            <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
              Nombre de bouteille&nbsp;(s)
            </StyledTableCell>
            <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
              Total
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lineItems &&
            lineItems.map((lineItem: any) => (
              <StyledTableRow
                hover
                key={lineItem.product.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {lineItem.product.title}
                </StyledTableCell>
                <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
                  {lineItem.product.description}
                </StyledTableCell>
                <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
                  {lineItem.price}€
                </StyledTableCell>
                <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
                  {lineItem.quantity}
                </StyledTableCell>
                <StyledTableCell sx={{ padding: isTablette ? 0.2 : 2 }} align="center">
                  {lineItem.quantity * lineItem.price}€
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
  // @ts-ignore
))(({ theme }) => ({
  // @ts-ignore
  backgroundColor: theme.palette.background.second as TypeBackground,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .122)'
}))

const OrderComponent: React.FC<OrdersProps> = (props) => {
  const { orders } = props
  const [activeStep, setActiveStep] = useState(0)

  const { isTablette } = useScreen()
  const { classes, theme } = useStyles()

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }
  return (
    <div>
      {orders &&
        orders.map((order) => {
          const { lineItems, id, totalPrice, createdAt, comments, facturation, address } = order
          return (
            <Accordion
              sx={{
                backgroundColor: theme.palette.background.default
              }}
            >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Grid container justifyContent="space-around" direction="row">
                  <Grid item>
                    <Typography className={classes.typoOrderLines}> Ref : {id} </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>
                      Créé le {new Date(createdAt).toLocaleDateString()}{' '}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>Status : {comments}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.typoOrderLines}>
                      Montant total : {totalPrice} €
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: theme.palette.background.default,
                  padding: isTablette ? 0 : 6
                }}
              >
                {!isTablette ? (
                  address && (
                    <>
                      <CustomizedTables lineItems={lineItems} />

                      <Grid
                        style={{ textAlign: 'end' }}
                        justifyContent="flex-end"
                        alignItems="flex-end"
                      >
                        <Stepper style={{ marginBottom: 10, marginTop: 10 }} nonLinear>
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
                        <Grid direction="row" justifyContent="space-between" container>
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
                              <Grid direction="row" justifyContent="space-between" container>
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
                              <Grid direction="row" justifyContent="space-between" container>
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
                    </>
                  )
                ) : (
                  <>
                    <CustomizedTables lineItems={lineItems} />
                    <Grid
                      style={{ textAlign: 'end' }}
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Stepper
                        style={{ marginBottom: 10, marginTop: 10 }}
                        nonLinear
                        activeStep={activeStep}
                      >
                        {steps.map((step, index) => (
                          <Step key={step.label}>
                            <StepButton
                              onClick={handleStep(index)}
                              key={uuid()}
                              style={{ color: '#CCBF90' }}
                              icon={step.icon}
                            >
                              {step.label}
                            </StepButton>
                          </Step>
                        ))}
                      </Stepper>
                      <Grid direction="row" justifyContent="center" container>
                        {activeStep === 0
                          ? address && (
                            <Grid item>
                              <Grid justifyContent="space-between" container spacing={3}>
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
                              <Grid direction="row" justifyContent="space-between" container>
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
                              <Grid direction="row" justifyContent="space-between" container>
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
                          )
                          : facturation && (
                            <Grid item>
                              <Grid
                                direction="row"
                                justifyContent="space-between"
                                container
                                spacing={3}
                              >
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
                              <Grid direction="row" justifyContent="space-between" container>
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
                              <Grid direction="row" justifyContent="space-between" container>
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
                  </>
                )}
                <Button className={classes.typoOrderLines}>Contacter Service Apres vente</Button>
              </AccordionDetails>
            </Accordion>
          )
        })}
    </div>
  )
}

export default OrderComponent
