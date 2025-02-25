import { Hoyolab, LanguageEnum } from 'hoyoapi'

export default defineEventHandler(handleAsync(async (event) => {
  const hoyolab = new Hoyolab({
    // cookie: '_HYVUUID=ed5928eb-9647-46c7-a4af-cc9b739f423d; HYV_LOGIN_PLATFORM_OPTIONAL_AGREEMENT={%22content%22:[]}; DEVICEFP_SEED_ID=e838f39bc9c91a62; DEVICEFP_SEED_TIME=1740466617494; DEVICEFP=38d7f4c69c595; cookie_token_v2=v2_CAQSDGM5b3FhcTNzM2d1OBokYzI1ZWY5MTktYzdlMS00OGI3LTkxNDItODE5MWFjOTExMGQyIPvQ9b0GKMGY470DMMXj_gRCC2Jic19vdmVyc2Vh.xmm9ZwAAAAAB.MEYCIQCgNnOZBPd1olJnmIuxzSDzd_XGPcPsJiD4gP39h9qiSAIhAP4C2miOQhX1HHIPjrwUewykGgp0OHv90klNZ90IWQpl; account_mid_v2=1vlkvwa2fg_hy; account_id_v2=10465733; ltmid_v2=1vlkvwa2fg_hy; ltuid=10465733; mi18nLang=en-us; _MHYUUID=a478a017-6061-4e6a-ab68-d84f9c549b49; HYV_LOGIN_PLATFORM_LOAD_TIMEOUT={}; HYV_LOGIN_PLATFORM_TRACKING_MAP={}; ltoken=v2_CAISATAaJGE0NzhhMDE3LTYwNjEtNGU2YS1hYjY4LWQ4NGY5YzU0OWI0OSDe1_W9Bii5pNfgBDDF4_4EQgphY2NvdW50X29z.3mu9ZwAAAAAB.MEQCIDU_fs8VqnPwQ0x-Yk_1GDP4rRfqFEpxlr9YAXPuAlq5AiBMQy3hMfQMAwTSdJFgrWx-pD8Vivl0T7HWVrqDU5LO_Q; HYV_LOGIN_PLATFORM_LIFECYCLE_ID={%22value%22:%229676607c-73e2-4487-8045-7196e5dfd2c1%22}',
    cookie: event.context.cookie,
    lang: LanguageEnum.ENGLISH,
  })

  const data = await hoyolab.gamesList()

  return resultSuccess(200, 'Success', [...data])
}))
