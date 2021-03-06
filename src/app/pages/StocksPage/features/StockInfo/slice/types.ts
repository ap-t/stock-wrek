/* --- STATE --- */
import { RequestStatus } from 'types/RequestStatus';
import { RequestError } from 'types/RequestError';

export interface StockInfoState {
  stockInfo: StockInfo | null;
  status: RequestStatus;
  error: RequestError | null;
}

export interface StockInfo {
  '52WeekChange': number | null;
  SandP52WeekChange: number | null;
  address1: string | null;
  algorithm: string | null;
  annualHoldingsTurnover: string | null;
  annualReportExpenseRatio: number | null;
  ask: number | null;
  askSize: number | null;
  averageDailyVolume10Day: number | null;
  averageVolume: number | null;
  averageVolume10days: number | null;
  beta: number | null;
  beta3Year: number | null;
  bid: number | null;
  bidSize: number | null;
  bookValue: number | null;
  category: string | null;
  circulatingSupply: string | null;
  city: string | null;
  companyOfficers: any[] | null;
  country: string | null;
  currency: string | null;
  currentPrice: number | null;
  currentRatio: number | null;
  dateShortInterest: number | null;
  dayHigh: number | null;
  dayLow: number | null;
  debtToEquity: number | null;
  dividendRate: number | null;
  dividendYield: number | null;
  earningsGrowth: number | null;
  earningsQuarterlyGrowth: number | null;
  ebitda: number | null;
  ebitdaMargins: number | null;
  enterpriseToEbitda: number | null;
  enterpriseToRevenue: number | null;
  enterpriseValue: number | null;
  exDividendDate: number | null;
  exchange: string | null;
  exchangeTimezoneName: string | null;
  exchangeTimezoneShortName: string | null;
  expireDate: string | null;
  fiftyDayAverage: number | null;
  fiftyTwoWeekHigh: number | null;
  fiftyTwoWeekLow: number | null;
  financialCurrency: string | null;
  fiveYearAverageReturn: number | null;
  fiveYearAvgDividendYield: number | null;
  floatShares: number | null;
  forwardEps: number | null;
  forwardPE: number | null;
  freeCashflow: number | null;
  fromCurrency: string | null;
  fullTimeEmployees: number | null;
  fundFamily: string | null;
  fundInceptionDate: string | null;
  gmtOffSetMilliseconds: string | null;
  grossMargins: number | null;
  grossProfits: number | null;
  heldPercentInsiders: number | null;
  heldPercentInstitutions: number | null;
  impliedSharesOutstanding: string | null;
  industry: string | null;
  isEsgPopulated: boolean | null;
  lastCapGain: number | null;
  lastDividendDate: string | null;
  lastDividendValue: string | null;
  lastFiscalYearEnd: number | null;
  lastMarket: string | null;
  lastSplitDate: string | null;
  lastSplitFactor: string | null;
  legalType: string | null;
  logo_url: string | null;
  longBusinessSummary: string | null;
  longName: string | null;
  market: string | null;
  marketCap: number | null;
  maxAge: number | null;
  maxSupply: number | null;
  messageBoardId: string | null;
  morningStarOverallRating: string | null;
  morningStarRiskRating: string | null;
  mostRecentQuarter: number | null;
  navPrice: number | null;
  netIncomeToCommon: number | null;
  nextFiscalYearEnd: number | null;
  numberOfAnalystOpinions: number | null;
  open: number | null;
  openInterest: number | null;
  operatingCashflow: number | null;
  operatingMargins: number | null;
  payoutRatio: number | null;
  pegRatio: number | null;
  phone: string | null;
  previousClose: number | null;
  priceHint: number | null;
  priceToBook: number | null;
  priceToSalesTrailing12Months: number | null;
  profitMargins: number | null;
  quickRatio: number | null;
  quoteType: string | null;
  recommendationKey: string | null;
  recommendationMean: number | null;
  regularMarketDayHigh: number | null;
  regularMarketDayLow: number | null;
  regularMarketOpen: number | null;
  regularMarketPreviousClose: number | null;
  regularMarketPrice: number | null;
  regularMarketVolume: number | null;
  returnOnAssets: number | null;
  returnOnEquity: number | null;
  revenueGrowth: number | null;
  revenuePerShare: number | null;
  revenueQuarterlyGrowth: number | null;
  sector: string | null;
  sharesOutstanding: number | null;
  sharesPercentSharesOut: number | null;
  sharesShort: number | null;
  sharesShortPreviousMonthDate: number | null;
  sharesShortPriorMonth: number | null;
  shortName: string | null;
  shortPercentOfFloat: number | null;
  shortRatio: number | null;
  startDate: string | null;
  state: string | null;
  strikePrice: number | null;
  symbol: string | null;
  targetHighPrice: number | null;
  targetLowPrice: number | null;
  targetMeanPrice: number | null;
  targetMedianPrice: number | null;
  threeYearAverageReturn?: number | null;
  toCurrency: boolean | null;
  totalAssets: number | null;
  totalCash: number | null;
  totalCashPerShare: number | null;
  totalDebt: number | null;
  totalRevenue: number | null;
  tradeable: boolean | null;
  trailingAnnualDividendRate: number | null;
  trailingAnnualDividendYield: number | null;
  trailingEps: number | null;
  trailingPE: number | null;
  twoHundredDayAverage: number | null;
  volume: number | null;
  volume24Hr: number | null;
  volumeAllCurrencies: number | null;
  website: string | null;
  yield: number | null;
  ytdReturn: number | null;
  zip: string | null;
}
