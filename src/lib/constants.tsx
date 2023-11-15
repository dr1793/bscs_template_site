export const BASE_CONTENTFUL_URL: string =
  "https://graphql.contentful.com/content/v1/spaces/";

export var MESSAGE_API_URL: string = "https://api.radeleau.dev/";
export var MAILING_API_URL: string = "https://api.radeleau.dev/mailing";
export var BSCS_EMAIL: string = "social@bedstuyclothesswap.com";
if (process.env.NODE_ENV === "development") {
  MESSAGE_API_URL = "http://127.0.0.1:5000/";
  MAILING_API_URL = "http://127.0.0.1:5000/mailing";
  BSCS_EMAIL = "sefdwadrg@yahoo.com";
}

export const CONTACT_FORM_VALUES: ContactFormValue[] = [
  {
    label: "Full Name",
    tagLabel: "full-name",
    type: "text",
    autoComplete: "name",
    required: true,
    validationPattern: {
      value: /^[a-zA-Z- ]{1,50}$/,
      message: "Full Name should be shorter than 50 characters",
    },
  },
  {
    label: "Email",
    tagLabel: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    twoCols: true,
    validationPattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Email should be in the format: example@example.com",
    },
  },
  {
    label: "Phone Number",
    tagLabel: "phone-number",
    type: "tel",
    autoComplete: "tel",
    twoCols: true,
    required: false,
    formatter: "(###) ###-####",
    validationPattern: {
      value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      //value: /^\d{10}$/,
      message: "Phone number should be 10 digits",
    },
  },
  {
    label: "Subject",
    tagLabel: "subject",
    type: "text",
    autoComplete: "",
    required: true,
    validationPattern: {
      value: /^[\x00-\x7F]{1,200}$/,
      message: "Subject should be less than 200 characters",
    },
  },
  {
    label: "Message",
    tagLabel: "message",
    type: "text",
    autoComplete: "None",
    textArea: true,
    required: false,
    validationPattern: {
      value: /^[\s\S]{1,1000}$/,
      message: "Check your message length",
    },
  },
];

export const MAILING_LIST_EMAIL: ContactFormValue = {
  label: "Email",
  tagLabel: "email",
  type: "email",
  autoComplete: "email",
  required: true,
  twoCols: true,
  validationPattern: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Email should be in the format: example@example.com",
  },
};

export type ContactFormValue = {
  label: string;
  tagLabel: string;
  type: string;
  twoCols?: boolean;
  autoComplete: string;
  required: boolean;
  textArea?: boolean;
  formatter?: string;
  validationPattern: {
    value: RegExp;
    message: string;
  };
};

export const LOGO_SVG: JSX.Element = (
  <g>
    <path
      className="outer"
      d="M 247.1 1C 201.5 4.79999 160.7 19.1 122.5 44.5C 107 54.8 96.3 63.6 82.4 77.5C 18.5 141.2 -9.69999 231.2 5.60001 322.3C 17.3 391.3 55.4 453.9 111.2 495.6C 142.9 519.3 181 536.2 217.6 542.9C 238.1 546.6 245.5 547.2 267.5 547.2C 286.3 547.2 291.9 546.8 306.2 544.6C 335 540 356.6 533.2 382.6 520.4C 407.6 508.2 428.7 493.2 449.9 472.6C 505.8 418.1 535.3 344.1 532.7 265C 530.6 202 509.8 146.1 470.5 97.5C 461.5 86.4 439.4 64.7 428 55.9C 391.1 27.2 346.7 8.40002 301.9 2.59998C 287.2 0.599976 260.5 -0.100037 247.1 1zM 345.2 19C 356.5 22.5 365.3 34.2 363.6 43.3C 362.2 50.7 357.2 53.9 350 52C 344.3 50.5 342.7 47.5 343.5 40.6L 344.2 35L 339.9 33C 327.9 27.6 320.4 33.9 325.9 44.9C 328.6 50.1 329.2 50.5 340 53.5C 350.9 56.6 351.7 57.1 354.1 62.5C 359 73.1 353.5 86 342 91.2C 332.8 95.3 315 91.8 307.6 84.4C 304 80.7 300 71.8 300 67.3C 300 64.5 300.9 62.9 303.9 59.9C 307.2 56.6 308.4 56 312 56C 316 56 316.2 55.9 314.7 54.2C 311.8 51.1 309 42.9001 309 37.9001C 309 22.0001 326.2 13.1 345.2 19zM 273.3 21.2C 274.5 22.2 275 24.4 275.2 29.9C 275.6 39.9 277.2 41 283.4 35.2C 285.9 32.9 288.6 31 289.4 31C 290.9 31 292 34 292 38.5C 292 43.1 290.8 43.8 285 42.6C 280.7 41.8 279.7 41.9 278.3 43.3C 276.7 44.8 276.8 45.1 278.5 47C 279.5 48.2 282.1 50.1 284.2 51.2C 290.6 54.8 288.7 59.7 280.3 61.5C 274.5 62.7 272.7 60.3 270.3 48.5C 269.7 46 268.8 44.4 267.7 44.2C 266.3 43.9001 266 44.6 266 47.7C 266 52.4001 263.4 60.4001 261.4 62.1C 260.3 63 258.6 63.1 255.2 62.4C 249.1 61.2 248.3 58.3 253.2 54.9C 264.7 47 264.8 41 253.4 45.2C 248.5 46.9 246.8 45.1 247.2 38.6C 247.5 34.3 247.8 33.5 249.6 33.2C 250.7 33 253.3 34.3 255.4 36C 259.6 39.3 264.7 40 265.6 37.5C 266.4 35.5 264.4 30.6 261.9 28.4C 259.3 26 259.4 22.2 262.3 21C 265.6 19.7 271.4 19.8 273.3 21.2zM 215.2 30.4C 225.9 33.7 231.8 39.3 236 50.2C 239.3 58.8 240.1 69.7 237.8 77.4C 236.4 82 227.4 91.5 220.6 95.5C 214.1 99.3 198.7 103.9 190 104.6C 182.3 105.3 182.1 105.2 179.2 102.4C 176.5 99.6 176.3 98.9 175.6 88.1C 174.8 75.5 173.9 73 167.9 66.2C 163.2 60.8 161.6 56.2 162.3 50.1C 162.9 44.7 166.5 41.1 173.3 39C 175.6 38.4 180.4 36.2 183.9 34.2C 187.4 32.3 191.6 30.4 193.4 30C 198.7 28.7 210.3 28.9 215.2 30.4zM 390.4 44.1C 391.8 45.2 393 47 393 47.9C 393 50.6 396.6 54.7 401.6 57.6C 405.8 60.1 406.7 60.2 413.6 59.6C 420.9 58.9 421.1 59 424 61.9C 428.9 66.7 427.7 75 421.4 79.9C 417.6 82.9 415.5 82.5 410.7 78.1C 403.4 71.4 400 70.5 397.5 74.4C 395.9 76.8 395.3 79.8 392.4 99C 390.2 113.9 386.6 121 381.4 121C 377.8 121 370.5 117.4 368.2 114.5C 363.8 108.9 365.8 103 375.5 93C 378.9 89.4 383.8 83.9 386.4 80.7C 390.3 75.8 391 74.2 391 70.6C 391 65.2 389.7 64.1 382.6 63.1C 373.2 61.8 370.8 57.3 375 49C 378.6 42 385.1 39.9 390.4 44.1zM 143.3 59.1C 146.5 63 145 69.9 139.8 74.7C 138.6 75.9001 134.1 78.1 130 79.5C 125.9 81 121.5 83.3 120.3 84.6C 117.3 87.9 117.3 93.6 120.3 98.1C 122.2 101 123.2 101.5 127 101.8C 131.4 102.1 131.4 102.1 140.4 92.6C 150.2 82.2 153 81 157 85C 162 90 157.6 96.5 146.3 100.6C 135.5 104.5 133 106.9 133 113.1C 133 117.3 133.5 118.6 136.3 121.6C 138.9 124.4 140.5 125.3 144 125.7C 149.3 126.3 149.7 125.9 160 112.2C 168 101.6 170.6 100.4 175.6 105.4C 179.4 109.2 180.5 112.6 179.6 117.4C 178.3 124.5 162.6 134.8 145.2 140C 138.8 141.9 137.3 142.1 133.2 141C 119.9 137.7 110 126.2 103.1 106.2C 100.1 97.3001 100.2 86.5001 103.4 80.2001C 106.3 74.6001 117.8 63.1001 123.7 60.1001C 132.5 55.7001 140.1 55.3 143.3 59.1zM 444.9 88.5C 452.3 92.3 455.3 100.5 450.8 104.7C 449.5 105.9 443.3 109.4 437 112.5C 424.7 118.6 420 122.3 416.9 128.2C 413.7 134.5 414.3 137.1 420.4 142.8C 423.4 145.6 427 148.2 428.5 148.6C 434.2 150 443.3 145.1 446.5 138.9C 447.4 137.3 449.4 130.8 451.1 124.3C 452.7 117.8 454.9 111.2 455.8 109.5C 458.3 105.2 461.9 105.1 466.5 109.1C 471.2 113.3 473 116.9 473 122.3C 473 130.5 469 137.3 455.2 152.8C 450.4 158.1 445 164.5 443.3 167C 439.1 173.1 436.6 175.2 433.9 174.8C 431.3 174.5 427 167.9 427 164.2C 427 162.7 426.4 162 425.2 162C 421.8 162 417.3 159 411 152.7C 404.2 145.9 400 138.7 400 134C 400 125.2 423.2 92.6 432.5 88.4C 436.5 86.6 441.4 86.7 444.9 88.5zM 287.5 103C 346.6 109.8 399 151.1 422.1 209C 430.7 230.6 434.3 250.8 434.2 276C 433.9 357.3 377.3 427 298.8 443C 286.2 445.6 263.7 446.6 249.7 445.1C 223.9 442.5 198.7 433.3 175.5 418C 160.5 408.1 140.3 387.9 130.1 372.6C 110.5 343.1 101.6 315 100.3 278.5C 98.7 231.7 115.7 187.2 148.3 153.4C 176.3 124.3 209.1 107.8 249.5 102.7C 256 101.9 279 102.1 287.5 103zM 85.2 115.9C 90.8 118.3 92.1 120 93.1 126.2C 93.6 129.2 94.8 132.2 96 133.4C 97.8 135.3 98.3 135.3 101.2 134.1C 107.9 131.3 111.4 131.5 115.2 134.9C 123.3 142 125.3 156.6 119.7 167.6C 116.2 174.4 107.4 182.4 100.9 184.5C 89.6 188.3 74.5 183.2 63 171.9C 47.9 157.1 47.7 141.6 62.5 123.7C 70.5 113.9 76.1 112 85.2 115.9zM 487.5 141.2C 489.8 143.9 490.1 145.1 489.7 148.5C 489.3 151.8 488.3 153.2 483.8 157C 473.4 165.8 468 171.6 468 174C 468 177.4 471.8 181 475.3 181C 476.9 181 482.3 179.2 487.4 176.9C 498.2 172.1 503.4 172 507.9 176.4C 511.1 179.6 511.3 185.9 508.4 189.1C 502.6 195.6 495.2 195.4 480.2 188.5C 464.2 181.2 460.9 181.4 455.3 190.3C 449.3 199.8 445.9 201.7 441.2 198.4C 436.4 195.1 434.2 186 437.8 184.1C 438.8 183.6 442.9 182.7 447 182.1C 459.2 180.4 462.1 176.8 464 161C 465.4 149.1 468 143.3 473.5 140.3C 479.5 136.9 484.2 137.3 487.5 141.2zM 53.7 201.5C 64.6 206.1 67.4 217.1 61.2 230.5C 57.5 238.2 57.4 239.6 59.7 242.2C 61.7 244.4 66.5 244.5 74 242.5C 77 241.7 80.3 241 81.3 241C 84.3 241 85.2 245.4 83.6 251.7C 82 257.7 78.5 262.1 73.2 264.9L 69.9 266.6L 74.9 267.9C 80.7 269.4 82.1 270.8 84.5 277.6C 87.7 286.7 85.6 289.3 72.6 292.2C 65 293.9 62.8 296.6 62.2 305C 61.7 311.9 63.1 316.1 66.8 319C 68.7 320.6 70.8 321 76.4 321C 86.3 321 87.3 321.9 87.8 330.9C 88.3 339.3 87 341.9 81 345C 74.8 348.2 60.9 347.8 50.3 344.1C 30.4 337.2 20.5 326.8 19.3 311.8C 18.9 306.5 19.2 304.6 21.4 299.7C 26.2 288.9 41.7 275.5 55.5 270.4L 60.5 268.5L 53.3 267.9C 36.8 266.4 22.6 257.3 19.4 246.2C 18.2 242.3 17.9 238.1 18.2 232C 18.5 224.6 19.1 222.2 21.9 216.6C 25.6 209 29.2 204.5 33.5 201.9C 37.3 199.5 48.5 199.3 53.7 201.5zM 497.6 219.5C 511.2 226.1 516.2 234.3 516.3 250C 516.3 257.9 516.1 259.1 512.9 265C 510.4 269.8 508.5 272.1 505.5 273.7C 496.5 278.8 488.9 274.5 489 264.3C 489.1 259.7 490 258.4 496.4 254.1C 501.1 250.8 501.2 250.6 500.7 246.7C 499.2 235.9 486.7 230.3 472.8 234.4C 465.7 236.4 459 243.2 459 248.3C 459 252.5 464.6 258.2 471 260.5C 478.2 263 479.3 264.6 478.6 271C 477.8 277.1 476.2 279.4 471.4 281C 463.4 283.7 455.1 278 449.2 266.1C 445.7 258.9 445.5 258 445.6 249C 445.7 237.9 447.1 234 453.3 227.3C 458.2 222 465 218.3 473.4 216.4C 482 214.5 489.1 215.4 497.6 219.5zM 497.5 288.9C 505.9 292.8 507.7 294.3 510.1 299.5C 514.3 308.6 511.2 321.1 504.6 321.8C 501.8 322.2 494 318 481.7 309.8C 474.3 304.8 466.2 301 462.8 301C 461.4 301 458.8 302.2 457.1 303.6C 453 307 453.1 310.3 457.4 321C 462.4 333.3 460.8 337.8 451.2 338.8C 436.9 340.1 432.9 327.2 441.8 308.8C 446.3 299.5 451.6 292.8 456.4 290.3C 465 285.8 469.2 284.9 480.1 285.3C 489.5 285.6 491.4 286 497.5 288.9zM 470.3 345.6C 481.2 349.3 487.9 355.2 492.2 364.7C 495.2 371.3 495.2 383.2 492.1 391.2C 488.7 400 481.8 408.8 476.2 411.3C 470.2 414 459.8 414.1 452 411.5C 436.8 406.5 428.7 400.4 424.3 391C 416.2 373.3 429.7 346.9 449 342.9C 454.1 341.9 462.6 342.9 470.3 345.6zM 92.4 358C 96.5 359.6 99.4 361.7 104.3 366.9C 107.9 370.7 111 375 111.3 376.5C 112.6 383.8 107.1 390.4 92 399.3C 86.2 402.7 80 406.8 78.3 408.4C 73.1 412.9 74.4 417 80.8 417C 83.8 417 85.6 415.7 94.4 407.2C 106.1 395.9 109.1 393.6 114.2 392.2C 119.8 390.7 124.3 392.3 128.4 397.3C 136 406.6 135 416.1 124.5 432.4C 120.1 439.2 109.6 449.1 103.7 451.9C 94.2 456.5 88.4 454.6 84 445.5C 79 435.2 82.2 430.8 100.4 422.8C 114.2 416.7 118 414 118 410.1C 118 405.7 115.4 403 111.2 403C 107.8 403 106.5 404 95.5 415.1C 84.3 426.3 78.2 431 74.6 431C 72.5 431 66.2 425.3 64.4 421.9C 62.5 418.1 62.6 414.6 64.9 410.2C 67.6 405 71.8 401.4 84.3 393.5C 99.6 383.9 101.8 380.5 95.9 375.6C 93.7 373.7 91.7 373 88.8 373C 84.9 373 84 373.6 73.1 384.4C 60.3 396.9 57.2 399 50.8 399C 42.7 399 37 393.2 37 385C 37 376.9 43.7 368.8 55 363C 68.9 356 82.2 354.2 92.4 358zM 411.8 404.5C 413.6 406 417.8 412.9 422 421.1C 429.3 435.2 433.3 440 437.7 440C 440.2 440 443.5 436.5 445.5 431.8C 446.3 429.7 448.1 427.3 449.4 426.5C 451.5 425.1 452.2 425.1 455.2 426.3C 457.1 427.1 459.9 429.2 461.4 431.1C 463.9 434 464.2 435 463.7 439.4C 463.1 445.6 460.6 448 454.4 448C 450.6 448 449.5 448.6 444.4 453.3C 439.1 458.2 438.7 459 437.9 464.5C 437.3 469.1 436.5 471 434.5 472.7C 430.6 476.1 425.8 475.7 421.5 471.7C 415.3 466 415.1 459.5 421.1 456.2C 426.1 453.5 431 449 431 447C 431 444 425 439.7 411 432.4C 392.2 422.6 388.4 417.3 394.5 409C 399.8 401.8 406.5 400 411.8 404.5zM 165.2 426.3C 171.6 429.2 180.4 436.9 182.9 441.9C 187.4 450.6 186.4 461.8 180.8 466.5C 177.9 468.9 177 469.2 172 468.7L 166.5 468.2L 166.8 475.5C 167.2 484 165.3 488.8 159.5 493.8C 155.1 497.7 152.5 498.4 144.6 497.8C 137.2 497.2 130.3 494.3 124.2 489.3C 119.5 485.5 117.9 482.5 115.5 473.3C 113.7 466.4 114.8 461.6 119.3 457C 123.6 452.6 127.7 452.9 133.1 458C 136.8 461.5 137.2 462.3 136.6 465.2C 136.3 466.9 135.1 469.4 134 470.5C 132.9 471.7 132 473.3 132 474.1C 132 477.2 142.4 485 146.4 485C 149.5 485 152 480 152 473.9L 152 468.1L 146.3 463.3C 133.6 452.5 133.8 452.8 133.2 447.2C 131.6 430.3 148.9 419.1 165.2 426.3zM 382.1 434.8C 394.8 443 405 462.6 405 479C 405 488.7 398.9 496.9 390.2 498.6C 386.4 499.4 385.1 497.6 383.9 489.9C 383.4 486.5 382.4 482.8 381.9 481.8C 380.1 478.4 374.9 476 369.3 476C 364.6 476 363.5 476.4 359.9 479.7C 351.7 487.2 351 492.1 357.4 497.4C 362.8 501.8 363.6 504 361.9 509.2C 359.2 517.4 351.9 519.3 343.7 513.9C 330 504.8 318 482.8 318 466.7C 318 458 320 454.1 325.9 451C 334.1 446.9 337.3 449 338.6 459.5C 339.2 464.4 339.9 466.1 342.5 468.7C 345.3 471.5 346.5 472 350.7 472C 353.4 472 357.8 471.3 360.4 470.4C 365.9 468.5 372 463.2 372 460.2C 372 458.1 367.3 453.6 362.1 450.8C 358.5 448.8 358.1 445.6 360.8 440C 364.8 432 374 429.7 382.1 434.8zM 240.3 457.9C 243.9 459.6 247.8 462.2 248.8 463.5C 251.2 466.5 252 466.6 252 464.2C 252 459.3 260.9 455 271.2 455C 286.8 455 302.9 459.1 307.7 464.2C 315.9 472.9 319.3 494.2 315 509.9C 310.9 524.6 306.7 530.1 296 534.5C 287.4 538.1 272.3 539.1 265.8 536.5C 256.2 532.7 254.2 526.7 260.5 521.1C 264.8 517.3 267.6 516.6 274.3 517.4C 291.8 519.5 290.4 519.6 293.3 516C 296.8 511.8 297.1 504.8 293.8 501.3C 290.8 498.1 283.9 498.2 275.7 501.6C 267.4 505 262.4 505.2 259.9 502.1C 256.3 497.7 258.4 491.8 264 490.7C 265.7 490.3 270.5 490.7 274.8 491.5C 286.2 493.7 288.4 493.5 291.4 490C 294.2 486.6 295.6 481.4 294.5 478C 294.1 476.8 292.5 474.3 290.8 472.4C 286.8 467.8 284.2 468 270.8 473.6C 264 476.5 259 478 257.5 477.7C 255.3 477.3 255 477.6 255 480.5C 255 486.1 248.6 492 242.5 492L 240 492L 242.3 496.7C 245.6 503.4 246.3 508.7 244.5 514.7C 240.7 527.6 224.5 533.2 207.7 527.4C 202.4 525.6 197.2 520.8 193.3 514.2C 191.2 510.6 190.8 509 191.2 504.3C 191.6 499.7 192.2 498.2 194.5 496.2C 196.9 494.2 198.1 493.9 202.2 494.2C 208.9 494.9 212.4 498.2 211.6 503C 210.2 510.6 210.4 511.3 213.6 513.2C 218.4 516 225.6 516.7 228 514.5C 230.9 511.9 230.7 504.4 227.7 499.9C 225.7 496.9 224.2 496.2 216.1 493.8C 211 492.4 205.9 490.4 204.8 489.3C 197.4 482.6 198.1 467.7 206.2 460.4C 211.8 455.3 216 453.9 225.1 454.3C 232.1 454.7 234.8 455.3 240.3 457.9z"
    />
    <path
      className="outer"
      d="M 325.7 65.7C 325.3 67.9 323.8 70.7 321.8 72.7L 318.5 76.1L 320.8 78.1C 329.4 85 344.7 80.2 343.8 70.9C 343.5 67.6 343.2 67.4 335.5 64.8C 331.1 63.4 327.2 62.0999 326.9 62.0999C 326.5 61.9999 326 63.6 325.7 65.7z"
    />
    <path
      className="outer"
      d="M 193.5 40.9C 191.3 41.9 188.4 44 187 45.4C 184.7 47.9 184.5 49.1 184.2 58C 183.7 72 186.1 79.3 194 87.2C 199 92.3 200.2 93 203.6 93C 208.1 93 210.5 91.6 217.3 85.1C 223.3 79.3 225.6 72.7 224.6 63.4C 223.9 56.2 221.7 49.5 219.2 46.6C 218.3 45.6 215.5 43.4 213.1 41.8C 207.6 38.4 199.8 38 193.5 40.9z"
    />
    <path d="M 295 153.6C 290.4 155.6 286.3 159.6 285 163.4C 284.3 165.7 282.9 167 279.5 168.3C 277.1 169.3 273.7 171.7 272 173.6C 269.5 176.5 269 177.9 269 182.4C 269 185.3 269.5 189 270 190.6C 270.8 192.9 270.6 194.3 269 197.5C 266.8 201.9 266.5 204.8 268 210.2C 269.4 215.1 273.3 219.6 277.5 221.1C 280.1 222.1 281 223 281.5 225.6C 282.3 230 286.5 234.9 291.5 237.1C 296.4 239.4 299.2 239.5 303.5 237.4C 306.6 236 307 236 310.1 237.9C 312 239.1 314.5 240 315.8 240C 318.8 240 321 245 321.7 254C 322.3 261.1 320.5 273.6 318.7 274.7C 318.2 275 320.1 276.5 323.1 278.1L 328.5 280.8L 330 269.7L 331.5 258.5L 335.3 256.6C 340.2 254.3 344.4 254.3 350 256.9C 355.5 259.4 365.7 259.7 372.3 257.4C 381.1 254.4 385.6 249.2 393.8 232.2C 397.8 223.8 401 215.9 400.8 214.8C 400.6 213.4 398.8 211.8 395.5 210.1C 391.2 207.9 389.2 207.5 381 207.5C 372.7 207.5 370.7 207.9 365.3 210.4C 356.7 214.3 350.4 221.3 344.2 233.7C 338.7 244.6 337.5 246 333.5 246.3C 331.1 246.5 330.6 246 329.4 242.1C 328.2 237.9 328.2 237.5 330.6 234.7C 332 233.1 333.4 230.4 333.7 228.9C 334.1 226.6 335.1 225.8 338.3 224.8C 343.6 223.2 348.5 218.4 350 213.3C 351.1 209.8 351 208.4 349.6 203.8C 347.9 198.7 347.9 198.3 349.9 194C 354.3 184.4 351 175.8 341.3 171.4C 338.9 170.4 338 169.3 338 167.6C 338 164.5 334.2 159.1 330.1 156.3C 326.3 153.8 318.9 153.2 314.7 155.1C 312.8 156 311.5 155.8 308.2 154.1C 303.4 151.6 299.8 151.5 295 153.6zM 317 185.9C 318.4 186.9 320.2 189.6 321 191.8C 325 203.2 312.7 213.3 302.9 206.7C 296.2 202.2 295.3 192.3 301.1 186.9C 305.6 182.7 311.9 182.3 317 185.9z" />
    <path
      className="upper-star"
      d="M 231.6 170.1C 231.3 170.9 230.6 173.9 230 176.9C 227.9 187.3 223.6 191.7 212.5 194.8C 208.7 195.8 206.1 196.9 206.6 197.2C 207.1 197.5 210.1 198.3 213.2 198.9C 223.4 201.1 228.4 205.9 230.9 216.5C 231.8 220.1 233 223.1 233.5 223.1C 234 223.1 235 220.4 235.6 217.1C 238.1 205.1 242.6 200.3 253.9 197.9C 256.7 197.3 259.2 196.5 259.5 196C 259.8 195.5 257.4 194.6 254.3 194C 242.4 191.5 238.3 187.8 235.4 176.9C 233.5 170 232.3 167.8 231.6 170.1z"
    />
    <path
      className="lower-star"
      d="M 219.7 223C 219.4 223.8 218.4 227.6 217.4 231.5C 215.1 240.7 210.9 245.1 202.5 247.5C 193 250.1 193.3 250 195 251C 195.8 251.6 197.4 252 198.5 252C 207.3 252.1 215.7 258.9 218.4 268.2C 219.3 271.3 220 274.5 220 275.3C 220 276.2 220.4 277.1 220.9 277.5C 221.4 277.8 222.3 275.4 223 272.3C 225.4 259.4 230.1 254.1 241.3 251.4C 245 250.5 247.7 249.4 247.5 249C 247.2 248.6 244 247.7 240.3 247C 234.4 245.9 233 245.1 229 241.1C 225.3 237.4 224.2 235.4 223.1 230.5C 222.3 227.2 221.3 223.8 220.9 223C 220.2 221.7 220.1 221.7 219.7 223z"
    />
    <path d="M 285.7 250.2C 284.4 252 282.1 255.7 280.6 258.3L 277.8 263.2L 280.2 265.7C 281.4 267.1 283.7 268.8 285.3 269.6C 286.8 270.4 288 271.5 288 272C 288 273.9 285.1 273 280.7 269.6L 276.2 266.1L 273.5 270.2L 270.8 274.2L 273.7 277.2C 275.2 278.8 277.8 280.9 279.4 281.7C 281.3 282.7 281.9 283.5 281.2 284.2C 279.9 285.5 276.6 283.8 272.3 279.7L 269.1 276.7L 266.6 279.6C 265.2 281.2 264 283.1 264 283.9C 264 284.7 265.8 287 268 289.1C 270.2 291.2 272 293.2 272 293.5C 272 295.1 269.1 293.5 265.5 290L 261.4 286L 258.6 288.9C 256.2 291.5 256 292.1 257 294.1C 257.7 295.4 259.4 297.7 260.8 299.2C 263.3 301.9 263.3 302 261.3 302C 259.3 302 257.2 299.9 254.4 295.4C 253.3 293.6 253.1 293.6 250.6 295.9C 247.1 299.2 247.3 301.2 251.5 305.9C 255.3 310.1 255.7 311 253.6 311C 252.2 311 247.5 306.1 245.5 302.5C 244.6 301 244.1 300.9 242.2 301.9C 239 303.6 239.2 308.9 242.6 313C 244.4 315.1 244.9 316.5 244.3 317.1C 242.9 318.5 238.1 312.7 237.3 308.8C 236.6 305 235.7 304.7 231.5 306.4C 227.4 308.2 226.9 310.7 230 315.8C 232.5 319.9 232.8 322.9 230.4 321C 228.2 319.1 226.7 316 226.1 312L 225.5 308.6L 210 308.1C 201.5 307.8 187.5 307.5 179 307.5C 163.9 307.5 163.4 307.6 157.5 310.4C 150.8 313.8 143 320.4 143 322.9C 143 325.9 155 338.9 163.9 345.6C 180.9 358.4 197.1 364.5 232.5 371.6C 239.7 373 257.8 377.3 272.8 381.1C 287.8 385 300.5 388 301 387.8C 304.9 386.5 327 356.6 327 352.7C 327 351.7 321 350.8 304.3 349.1C 291.7 347.9 278.1 346.5 274 346C 267 345.1 241.4 342.8 223.8 341.4C 216.2 340.8 210.3 338.4 209.3 335.4C 208.8 333.9 212.6 329.3 213.6 330.3C 214 330.7 213.8 331.6 213.2 332.2C 209.1 336.3 214.6 338.5 233 340C 254 341.7 298.5 345.9 313 347.6C 330.1 349.5 328.6 349.9 330.4 343.2C 331.3 340.1 332.9 334.8 334.1 331.5C 335.3 328.2 336.4 324.8 336.7 323.9C 337.1 322.6 335.8 321.7 331.7 320.1C 323.5 317.1 292.6 301.4 291.1 299.6C 290 298.3 290 296.9 290.8 292.7C 292.4 284.8 298.6 272.1 301.6 270.8C 304.4 269.5 304.6 268 302.4 261.7C 300.6 256.3 292.7 247 290 247C 288.9 247 287 248.5 285.7 250.2zM 305.4 361.1C 308.5 364.8 308.7 366.9 305.9 370.4C 304.3 372.4 303 373 300 373C 291.8 373 288.9 362 296.3 359C 300.3 357.4 302.8 357.9 305.4 361.1z" />
    <path d="M 296.2 362.2C 294.4 364 294.7 367.5 296.8 369.3C 299.2 371.5 301.3 371.4 303.3 369.2C 306.7 365.5 304.8 361 300 361C 298.6 361 296.9 361.5 296.2 362.2z" />
    <path d="M 172.6 260.9L 162.6 261.5L 161.8 264.5C 160.5 269.5 161.6 270.7 164.8 267.7C 169.5 263.2 170 263.9 170 275.4C 170 283.9 169.7 285.9 168.4 286.4C 165.2 287.6 168.4 289 174.6 289C 179.6 289 181 288.7 181 287.5C 181 286.7 180.6 286 180 286C 179.4 286 179 281.8 179 275.5C 179 264.2 179.5 263.3 183.7 267.2C 186.6 270 187.6 269 186.4 264.3C 185.4 260 186 260.2 172.6 260.9z" />
    <path d="M 385.8 262C 381.5 264.3 381 265.5 384 266.3C 385.8 266.8 386 267.7 386 276C 386 284.3 385.8 285.2 384 285.7C 382.9 286 382 286.9 382 287.6C 382 288.7 383.8 289 389.4 289C 397.1 289 399.6 287.9 396.1 286C 394.3 285.1 394 283.8 393.8 272.7C 393.5 261.3 393.4 260.5 391.5 260.3C 390.4 260.2 387.8 260.9 385.8 262z" />
    <path d="M 407.5 261.2C 403.1 263.6 401.7 268.6 404.1 273.1C 404.9 274.7 404.8 275.6 403.6 276.9C 402.7 277.9 402 280.1 402 281.8C 402 286.2 405.9 289 412 289C 418.7 289 422 286.2 422 280.8C 422 278.3 421.3 275.9 420.3 274.8C 419 273.4 418.9 272.7 419.8 271.8C 420.5 271.1 421 269.1 421 267.4C 421 261.6 413.2 258 407.5 261.2zM 415.8 266.4C 416 267.4 415.7 268.7 415.1 269.3C 413.6 270.8 410.5 267.7 411.4 265.5C 412.2 263.4 415.4 264 415.8 266.4zM 412.9 280.6C 414.5 282.7 414.7 283.6 413.9 284.6C 411.1 288 406.1 284.3 407.5 280C 408.4 277.2 410.5 277.5 412.9 280.6z" />
    <path d="M 111 261.7C 111 262.2 111.7 263.4 112.5 264.4C 114.6 267.1 114.5 281.5 112.5 285.4C 111.7 286.9 111 288.4 111 288.6C 111 288.8 115.9 289 122 289L 132.9 289L 134.5 286C 136 283.1 136.5 280 135.4 280C 135.1 280 133.5 280.9 131.9 282.1C 130.3 283.2 127.4 284.4 125.4 284.7L 121.9 285.3L 122.2 280.9C 122.4 277.2 122.9 276.4 124.8 276.2C 126.1 276 127.3 276.5 127.6 277.4C 127.9 278.3 128.8 279 129.6 279C 130.6 279 131 277.7 131 274.6C 131 269.7 129.9 268.2 128 270.5C 127.3 271.3 125.7 272 124.4 272C 122.3 272 122 271.5 122 268.5C 122 265.3 122.3 265 124.9 265C 126.4 265 128.9 265.9 130.3 267C 134.7 270.5 136.1 269.1 134 263.6C 133.1 261 132.9 261 122 261C 116 261 111 261.3 111 261.7z" />
    <path d="M 140.5 263.4C 135.5 268.4 138.4 275.6 146.4 278.3C 150.8 279.8 152.6 281.9 151.7 284.4C 150.6 287.2 146.1 286.3 142.3 282.5C 140.4 280.6 138.6 279 138.4 279C 137.7 279 138 286.5 138.8 287.6C 139.2 288.2 143 288.7 147.3 288.9C 154.7 289.1 155.2 289 158 286.1C 160.2 284 161 282.2 161 279.8C 161 275.5 158.3 272.8 151.5 270.3C 147.8 268.9 146.5 267.9 146.5 266.5C 146.5 263.1 151.2 263.4 155.5 267.1L 159.1 270.3L 158.8 265.9L 158.5 261.5L 150.7 261.2C 143.6 260.9 142.8 261.1 140.5 263.4z" />
    <path d="M 299.5 277.5C 296.4 282.8 293 291.6 293 294.6C 293 297.9 296.5 300.3 313.5 308.7C 333 318.4 337.3 319.9 339.6 317.9C 342.9 315.2 346 306.8 346 300.8C 346 295.2 345.9 294.9 342.3 292.7C 333.1 287 306.1 273 304.2 273C 302.8 273 301.2 274.4 299.5 277.5z" />
    <path d="M 184.7 281.6C 183.5 282.8 183.9 286.7 185.4 288C 188.9 290.8 194.7 286.9 192.4 283.2C 191.3 281.5 186 280.3 184.7 281.6z" />
    <path d="M 138.1 330.1C 135 336.8 135.4 340.3 139.7 345C 155.8 362.9 191 381.8 211.7 383.7C 216.9 384.2 218.1 384 218.6 382.6C 219.5 380.2 227.3 380.5 240.2 383.4C 254.5 386.7 255 387 255 392.6C 255 395.1 255.5 398 256 399.1C 258.1 402.9 277.7 411.3 293.5 415.1C 310 419 312.5 417.7 316.4 402.4C 317.8 396.9 319 391.9 319 391.4C 319 390.8 315.5 390.5 310.2 390.8C 302.3 391.2 299.9 390.8 286.4 387.2C 266.8 381.8 253.3 378.5 238 375.4C 219.4 371.6 201.4 367.2 193 364.3C 174.7 358 158.6 346.9 144.8 331L 140.1 325.6L 138.1 330.1z" />
    <path d="M 321.4 368.2C 318.7 372.2 313.9 378.3 310.6 381.7L 304.8 388L 311.2 388C 314.8 388 318.3 387.4 319.3 386.7C 321.9 384.7 328.8 361 326.8 361C 326.5 361 324.1 364.3 321.4 368.2z" />
    <path
      className="outer"
      d="M 67.4 133.3C 64.5 135.9 63.7 137.5 63.3 141.3C 62.8 145.6 63 146.2 66.3 149.5C 69.2 152.4 70.5 153 74 153C 77.7 153 78.9 152.4 82.6 148.6C 88.4 142.9 88.7 138.5 83.6 133.4C 80.7 130.5 79.5 130 75.6 130C 71.8 130 70.4 130.6 67.4 133.3z"
    />
    <path
      className="outer"
      d="M 98.5 145.9C 92.4 149.7 89.7 153.6 89.2 159.3C 88.8 164.2 89 165 92 168.3C 94.6 171.3 95.9 172 98.9 172C 105.7 172 112 162.9 112 153C 112 148.4 111.7 147.8 108.8 146C 104.7 143.5 102.3 143.5 98.5 145.9z"
    />
    <path
      className="outer"
      d="M 32.9 217.1C 25.2 225.3 30.4 241 40.9 241C 46.4 241 51.1 235.9 51.8 229.1C 52.7 219.8 48.3 214 40.3 214C 36.6 214 35.3 214.5 32.9 217.1z"
    />
    <path
      className="outer"
      d="M 41.5 299C 40.4 299.4 38.2 301.2 36.5 303C 33.9 305.7 33.5 306.8 33.5 312C 33.5 317.3 33.8 318.3 36.5 321C 44.9 329.4 55 322.8 55 309C 55 304.6 54.5 303.4 52.1 300.9C 49.1 297.9 45.5 297.3 41.5 299z"
    />
    <path
      className="outer"
      d="M 442.2 365.5C 438.4 368.9 436 374.2 436 379.3C 436 382.8 444.5 390.3 451.8 393.1C 459.4 396.1 467.8 396.3 471.7 393.4C 476.7 389.7 479 385.3 479 379.2C 479 374.2 478.7 373.4 475.3 370C 470.2 365 461.9 362 453 362C 446.4 362 445.8 362.2 442.2 365.5z"
    />
    <path
      className="outer"
      d="M 148.3 437.9C 142.4 441.6 142.8 443.6 151.1 451.1L 158.5 457.8L 159.7 454.8C 160.5 452.9 162.4 451.3 165.5 449.9C 170.7 447.6 171 446.3 167.5 442.2C 162.5 436.2 154.2 434.4 148.3 437.9z"
    />
    <path
      className="outer"
      d="M 214.5 469.1C 208.3 474.5 210.3 480 219.1 481.6C 220.9 482 223 482.6 223.5 483C 224.1 483.4 225.5 484 226.6 484.4C 228.4 485 228.9 484.6 229.4 481.7C 229.8 479.8 231.5 476.9 233.5 475C 236.2 472.3 236.7 471.4 235.8 470.3C 233.6 467.6 229.1 466 223.6 466C 218.8 466 217.6 466.4 214.5 469.1z"
    />
  </g>
);

export const OUTER_LIST_FOR_LOGO_ANIMATION = [
  "M 214.5 469.1C 208.3 474.5 210.3 480 219.1 481.6C 220.9 482 223 482.6 223.5 483C 224.1 483.4 225.5 484 226.6 484.4C 228.4 485 228.9 484.6 229.4 481.7C 229.8 479.8 231.5 476.9 233.5 475C 236.2 472.3 236.7 471.4 235.8 470.3C 233.6 467.6 229.1 466 223.6 466C 218.8 466 217.6 466.4 214.5 469.1z",
  "M 148.3 437.9C 142.4 441.6 142.8 443.6 151.1 451.1L 158.5 457.8L 159.7 454.8C 160.5 452.9 162.4 451.3 165.5 449.9C 170.7 447.6 171 446.3 167.5 442.2C 162.5 436.2 154.2 434.4 148.3 437.9z",
  "M 442.2 365.5C 438.4 368.9 436 374.2 436 379.3C 436 382.8 444.5 390.3 451.8 393.1C 459.4 396.1 467.8 396.3 471.7 393.4C 476.7 389.7 479 385.3 479 379.2C 479 374.2 478.7 373.4 475.3 370C 470.2 365 461.9 362 453 362C 446.4 362 445.8 362.2 442.2 365.5z",
  "M 41.5 299C 40.4 299.4 38.2 301.2 36.5 303C 33.9 305.7 33.5 306.8 33.5 312C 33.5 317.3 33.8 318.3 36.5 321C 44.9 329.4 55 322.8 55 309C 55 304.6 54.5 303.4 52.1 300.9C 49.1 297.9 45.5 297.3 41.5 299z",
  "M 32.9 217.1C 25.2 225.3 30.4 241 40.9 241C 46.4 241 51.1 235.9 51.8 229.1C 52.7 219.8 48.3 214 40.3 214C 36.6 214 35.3 214.5 32.9 217.1z",
  "M 98.5 145.9C 92.4 149.7 89.7 153.6 89.2 159.3C 88.8 164.2 89 165 92 168.3C 94.6 171.3 95.9 172 98.9 172C 105.7 172 112 162.9 112 153C 112 148.4 111.7 147.8 108.8 146C 104.7 143.5 102.3 143.5 98.5 145.9z",
  "M 67.4 133.3C 64.5 135.9 63.7 137.5 63.3 141.3C 62.8 145.6 63 146.2 66.3 149.5C 69.2 152.4 70.5 153 74 153C 77.7 153 78.9 152.4 82.6 148.6C 88.4 142.9 88.7 138.5 83.6 133.4C 80.7 130.5 79.5 130 75.6 130C 71.8 130 70.4 130.6 67.4 133.3z",
  "M 247.1 1C 201.5 4.79999 160.7 19.1 122.5 44.5C 107 54.8 96.3 63.6 82.4 77.5C 18.5 141.2 -9.69999 231.2 5.60001 322.3C 17.3 391.3 55.4 453.9 111.2 495.6C 142.9 519.3 181 536.2 217.6 542.9C 238.1 546.6 245.5 547.2 267.5 547.2C 286.3 547.2 291.9 546.8 306.2 544.6C 335 540 356.6 533.2 382.6 520.4C 407.6 508.2 428.7 493.2 449.9 472.6C 505.8 418.1 535.3 344.1 532.7 265C 530.6 202 509.8 146.1 470.5 97.5C 461.5 86.4 439.4 64.7 428 55.9C 391.1 27.2 346.7 8.40002 301.9 2.59998C 287.2 0.599976 260.5 -0.100037 247.1 1zM 345.2 19C 356.5 22.5 365.3 34.2 363.6 43.3C 362.2 50.7 357.2 53.9 350 52C 344.3 50.5 342.7 47.5 343.5 40.6L 344.2 35L 339.9 33C 327.9 27.6 320.4 33.9 325.9 44.9C 328.6 50.1 329.2 50.5 340 53.5C 350.9 56.6 351.7 57.1 354.1 62.5C 359 73.1 353.5 86 342 91.2C 332.8 95.3 315 91.8 307.6 84.4C 304 80.7 300 71.8 300 67.3C 300 64.5 300.9 62.9 303.9 59.9C 307.2 56.6 308.4 56 312 56C 316 56 316.2 55.9 314.7 54.2C 311.8 51.1 309 42.9001 309 37.9001C 309 22.0001 326.2 13.1 345.2 19zM 273.3 21.2C 274.5 22.2 275 24.4 275.2 29.9C 275.6 39.9 277.2 41 283.4 35.2C 285.9 32.9 288.6 31 289.4 31C 290.9 31 292 34 292 38.5C 292 43.1 290.8 43.8 285 42.6C 280.7 41.8 279.7 41.9 278.3 43.3C 276.7 44.8 276.8 45.1 278.5 47C 279.5 48.2 282.1 50.1 284.2 51.2C 290.6 54.8 288.7 59.7 280.3 61.5C 274.5 62.7 272.7 60.3 270.3 48.5C 269.7 46 268.8 44.4 267.7 44.2C 266.3 43.9001 266 44.6 266 47.7C 266 52.4001 263.4 60.4001 261.4 62.1C 260.3 63 258.6 63.1 255.2 62.4C 249.1 61.2 248.3 58.3 253.2 54.9C 264.7 47 264.8 41 253.4 45.2C 248.5 46.9 246.8 45.1 247.2 38.6C 247.5 34.3 247.8 33.5 249.6 33.2C 250.7 33 253.3 34.3 255.4 36C 259.6 39.3 264.7 40 265.6 37.5C 266.4 35.5 264.4 30.6 261.9 28.4C 259.3 26 259.4 22.2 262.3 21C 265.6 19.7 271.4 19.8 273.3 21.2zM 215.2 30.4C 225.9 33.7 231.8 39.3 236 50.2C 239.3 58.8 240.1 69.7 237.8 77.4C 236.4 82 227.4 91.5 220.6 95.5C 214.1 99.3 198.7 103.9 190 104.6C 182.3 105.3 182.1 105.2 179.2 102.4C 176.5 99.6 176.3 98.9 175.6 88.1C 174.8 75.5 173.9 73 167.9 66.2C 163.2 60.8 161.6 56.2 162.3 50.1C 162.9 44.7 166.5 41.1 173.3 39C 175.6 38.4 180.4 36.2 183.9 34.2C 187.4 32.3 191.6 30.4 193.4 30C 198.7 28.7 210.3 28.9 215.2 30.4zM 390.4 44.1C 391.8 45.2 393 47 393 47.9C 393 50.6 396.6 54.7 401.6 57.6C 405.8 60.1 406.7 60.2 413.6 59.6C 420.9 58.9 421.1 59 424 61.9C 428.9 66.7 427.7 75 421.4 79.9C 417.6 82.9 415.5 82.5 410.7 78.1C 403.4 71.4 400 70.5 397.5 74.4C 395.9 76.8 395.3 79.8 392.4 99C 390.2 113.9 386.6 121 381.4 121C 377.8 121 370.5 117.4 368.2 114.5C 363.8 108.9 365.8 103 375.5 93C 378.9 89.4 383.8 83.9 386.4 80.7C 390.3 75.8 391 74.2 391 70.6C 391 65.2 389.7 64.1 382.6 63.1C 373.2 61.8 370.8 57.3 375 49C 378.6 42 385.1 39.9 390.4 44.1zM 143.3 59.1C 146.5 63 145 69.9 139.8 74.7C 138.6 75.9001 134.1 78.1 130 79.5C 125.9 81 121.5 83.3 120.3 84.6C 117.3 87.9 117.3 93.6 120.3 98.1C 122.2 101 123.2 101.5 127 101.8C 131.4 102.1 131.4 102.1 140.4 92.6C 150.2 82.2 153 81 157 85C 162 90 157.6 96.5 146.3 100.6C 135.5 104.5 133 106.9 133 113.1C 133 117.3 133.5 118.6 136.3 121.6C 138.9 124.4 140.5 125.3 144 125.7C 149.3 126.3 149.7 125.9 160 112.2C 168 101.6 170.6 100.4 175.6 105.4C 179.4 109.2 180.5 112.6 179.6 117.4C 178.3 124.5 162.6 134.8 145.2 140C 138.8 141.9 137.3 142.1 133.2 141C 119.9 137.7 110 126.2 103.1 106.2C 100.1 97.3001 100.2 86.5001 103.4 80.2001C 106.3 74.6001 117.8 63.1001 123.7 60.1001C 132.5 55.7001 140.1 55.3 143.3 59.1zM 444.9 88.5C 452.3 92.3 455.3 100.5 450.8 104.7C 449.5 105.9 443.3 109.4 437 112.5C 424.7 118.6 420 122.3 416.9 128.2C 413.7 134.5 414.3 137.1 420.4 142.8C 423.4 145.6 427 148.2 428.5 148.6C 434.2 150 443.3 145.1 446.5 138.9C 447.4 137.3 449.4 130.8 451.1 124.3C 452.7 117.8 454.9 111.2 455.8 109.5C 458.3 105.2 461.9 105.1 466.5 109.1C 471.2 113.3 473 116.9 473 122.3C 473 130.5 469 137.3 455.2 152.8C 450.4 158.1 445 164.5 443.3 167C 439.1 173.1 436.6 175.2 433.9 174.8C 431.3 174.5 427 167.9 427 164.2C 427 162.7 426.4 162 425.2 162C 421.8 162 417.3 159 411 152.7C 404.2 145.9 400 138.7 400 134C 400 125.2 423.2 92.6 432.5 88.4C 436.5 86.6 441.4 86.7 444.9 88.5zM 287.5 103C 346.6 109.8 399 151.1 422.1 209C 430.7 230.6 434.3 250.8 434.2 276C 433.9 357.3 377.3 427 298.8 443C 286.2 445.6 263.7 446.6 249.7 445.1C 223.9 442.5 198.7 433.3 175.5 418C 160.5 408.1 140.3 387.9 130.1 372.6C 110.5 343.1 101.6 315 100.3 278.5C 98.7 231.7 115.7 187.2 148.3 153.4C 176.3 124.3 209.1 107.8 249.5 102.7C 256 101.9 279 102.1 287.5 103zM 85.2 115.9C 90.8 118.3 92.1 120 93.1 126.2C 93.6 129.2 94.8 132.2 96 133.4C 97.8 135.3 98.3 135.3 101.2 134.1C 107.9 131.3 111.4 131.5 115.2 134.9C 123.3 142 125.3 156.6 119.7 167.6C 116.2 174.4 107.4 182.4 100.9 184.5C 89.6 188.3 74.5 183.2 63 171.9C 47.9 157.1 47.7 141.6 62.5 123.7C 70.5 113.9 76.1 112 85.2 115.9zM 487.5 141.2C 489.8 143.9 490.1 145.1 489.7 148.5C 489.3 151.8 488.3 153.2 483.8 157C 473.4 165.8 468 171.6 468 174C 468 177.4 471.8 181 475.3 181C 476.9 181 482.3 179.2 487.4 176.9C 498.2 172.1 503.4 172 507.9 176.4C 511.1 179.6 511.3 185.9 508.4 189.1C 502.6 195.6 495.2 195.4 480.2 188.5C 464.2 181.2 460.9 181.4 455.3 190.3C 449.3 199.8 445.9 201.7 441.2 198.4C 436.4 195.1 434.2 186 437.8 184.1C 438.8 183.6 442.9 182.7 447 182.1C 459.2 180.4 462.1 176.8 464 161C 465.4 149.1 468 143.3 473.5 140.3C 479.5 136.9 484.2 137.3 487.5 141.2zM 53.7 201.5C 64.6 206.1 67.4 217.1 61.2 230.5C 57.5 238.2 57.4 239.6 59.7 242.2C 61.7 244.4 66.5 244.5 74 242.5C 77 241.7 80.3 241 81.3 241C 84.3 241 85.2 245.4 83.6 251.7C 82 257.7 78.5 262.1 73.2 264.9L 69.9 266.6L 74.9 267.9C 80.7 269.4 82.1 270.8 84.5 277.6C 87.7 286.7 85.6 289.3 72.6 292.2C 65 293.9 62.8 296.6 62.2 305C 61.7 311.9 63.1 316.1 66.8 319C 68.7 320.6 70.8 321 76.4 321C 86.3 321 87.3 321.9 87.8 330.9C 88.3 339.3 87 341.9 81 345C 74.8 348.2 60.9 347.8 50.3 344.1C 30.4 337.2 20.5 326.8 19.3 311.8C 18.9 306.5 19.2 304.6 21.4 299.7C 26.2 288.9 41.7 275.5 55.5 270.4L 60.5 268.5L 53.3 267.9C 36.8 266.4 22.6 257.3 19.4 246.2C 18.2 242.3 17.9 238.1 18.2 232C 18.5 224.6 19.1 222.2 21.9 216.6C 25.6 209 29.2 204.5 33.5 201.9C 37.3 199.5 48.5 199.3 53.7 201.5zM 497.6 219.5C 511.2 226.1 516.2 234.3 516.3 250C 516.3 257.9 516.1 259.1 512.9 265C 510.4 269.8 508.5 272.1 505.5 273.7C 496.5 278.8 488.9 274.5 489 264.3C 489.1 259.7 490 258.4 496.4 254.1C 501.1 250.8 501.2 250.6 500.7 246.7C 499.2 235.9 486.7 230.3 472.8 234.4C 465.7 236.4 459 243.2 459 248.3C 459 252.5 464.6 258.2 471 260.5C 478.2 263 479.3 264.6 478.6 271C 477.8 277.1 476.2 279.4 471.4 281C 463.4 283.7 455.1 278 449.2 266.1C 445.7 258.9 445.5 258 445.6 249C 445.7 237.9 447.1 234 453.3 227.3C 458.2 222 465 218.3 473.4 216.4C 482 214.5 489.1 215.4 497.6 219.5zM 497.5 288.9C 505.9 292.8 507.7 294.3 510.1 299.5C 514.3 308.6 511.2 321.1 504.6 321.8C 501.8 322.2 494 318 481.7 309.8C 474.3 304.8 466.2 301 462.8 301C 461.4 301 458.8 302.2 457.1 303.6C 453 307 453.1 310.3 457.4 321C 462.4 333.3 460.8 337.8 451.2 338.8C 436.9 340.1 432.9 327.2 441.8 308.8C 446.3 299.5 451.6 292.8 456.4 290.3C 465 285.8 469.2 284.9 480.1 285.3C 489.5 285.6 491.4 286 497.5 288.9zM 470.3 345.6C 481.2 349.3 487.9 355.2 492.2 364.7C 495.2 371.3 495.2 383.2 492.1 391.2C 488.7 400 481.8 408.8 476.2 411.3C 470.2 414 459.8 414.1 452 411.5C 436.8 406.5 428.7 400.4 424.3 391C 416.2 373.3 429.7 346.9 449 342.9C 454.1 341.9 462.6 342.9 470.3 345.6zM 92.4 358C 96.5 359.6 99.4 361.7 104.3 366.9C 107.9 370.7 111 375 111.3 376.5C 112.6 383.8 107.1 390.4 92 399.3C 86.2 402.7 80 406.8 78.3 408.4C 73.1 412.9 74.4 417 80.8 417C 83.8 417 85.6 415.7 94.4 407.2C 106.1 395.9 109.1 393.6 114.2 392.2C 119.8 390.7 124.3 392.3 128.4 397.3C 136 406.6 135 416.1 124.5 432.4C 120.1 439.2 109.6 449.1 103.7 451.9C 94.2 456.5 88.4 454.6 84 445.5C 79 435.2 82.2 430.8 100.4 422.8C 114.2 416.7 118 414 118 410.1C 118 405.7 115.4 403 111.2 403C 107.8 403 106.5 404 95.5 415.1C 84.3 426.3 78.2 431 74.6 431C 72.5 431 66.2 425.3 64.4 421.9C 62.5 418.1 62.6 414.6 64.9 410.2C 67.6 405 71.8 401.4 84.3 393.5C 99.6 383.9 101.8 380.5 95.9 375.6C 93.7 373.7 91.7 373 88.8 373C 84.9 373 84 373.6 73.1 384.4C 60.3 396.9 57.2 399 50.8 399C 42.7 399 37 393.2 37 385C 37 376.9 43.7 368.8 55 363C 68.9 356 82.2 354.2 92.4 358zM 411.8 404.5C 413.6 406 417.8 412.9 422 421.1C 429.3 435.2 433.3 440 437.7 440C 440.2 440 443.5 436.5 445.5 431.8C 446.3 429.7 448.1 427.3 449.4 426.5C 451.5 425.1 452.2 425.1 455.2 426.3C 457.1 427.1 459.9 429.2 461.4 431.1C 463.9 434 464.2 435 463.7 439.4C 463.1 445.6 460.6 448 454.4 448C 450.6 448 449.5 448.6 444.4 453.3C 439.1 458.2 438.7 459 437.9 464.5C 437.3 469.1 436.5 471 434.5 472.7C 430.6 476.1 425.8 475.7 421.5 471.7C 415.3 466 415.1 459.5 421.1 456.2C 426.1 453.5 431 449 431 447C 431 444 425 439.7 411 432.4C 392.2 422.6 388.4 417.3 394.5 409C 399.8 401.8 406.5 400 411.8 404.5zM 165.2 426.3C 171.6 429.2 180.4 436.9 182.9 441.9C 187.4 450.6 186.4 461.8 180.8 466.5C 177.9 468.9 177 469.2 172 468.7L 166.5 468.2L 166.8 475.5C 167.2 484 165.3 488.8 159.5 493.8C 155.1 497.7 152.5 498.4 144.6 497.8C 137.2 497.2 130.3 494.3 124.2 489.3C 119.5 485.5 117.9 482.5 115.5 473.3C 113.7 466.4 114.8 461.6 119.3 457C 123.6 452.6 127.7 452.9 133.1 458C 136.8 461.5 137.2 462.3 136.6 465.2C 136.3 466.9 135.1 469.4 134 470.5C 132.9 471.7 132 473.3 132 474.1C 132 477.2 142.4 485 146.4 485C 149.5 485 152 480 152 473.9L 152 468.1L 146.3 463.3C 133.6 452.5 133.8 452.8 133.2 447.2C 131.6 430.3 148.9 419.1 165.2 426.3zM 382.1 434.8C 394.8 443 405 462.6 405 479C 405 488.7 398.9 496.9 390.2 498.6C 386.4 499.4 385.1 497.6 383.9 489.9C 383.4 486.5 382.4 482.8 381.9 481.8C 380.1 478.4 374.9 476 369.3 476C 364.6 476 363.5 476.4 359.9 479.7C 351.7 487.2 351 492.1 357.4 497.4C 362.8 501.8 363.6 504 361.9 509.2C 359.2 517.4 351.9 519.3 343.7 513.9C 330 504.8 318 482.8 318 466.7C 318 458 320 454.1 325.9 451C 334.1 446.9 337.3 449 338.6 459.5C 339.2 464.4 339.9 466.1 342.5 468.7C 345.3 471.5 346.5 472 350.7 472C 353.4 472 357.8 471.3 360.4 470.4C 365.9 468.5 372 463.2 372 460.2C 372 458.1 367.3 453.6 362.1 450.8C 358.5 448.8 358.1 445.6 360.8 440C 364.8 432 374 429.7 382.1 434.8zM 240.3 457.9C 243.9 459.6 247.8 462.2 248.8 463.5C 251.2 466.5 252 466.6 252 464.2C 252 459.3 260.9 455 271.2 455C 286.8 455 302.9 459.1 307.7 464.2C 315.9 472.9 319.3 494.2 315 509.9C 310.9 524.6 306.7 530.1 296 534.5C 287.4 538.1 272.3 539.1 265.8 536.5C 256.2 532.7 254.2 526.7 260.5 521.1C 264.8 517.3 267.6 516.6 274.3 517.4C 291.8 519.5 290.4 519.6 293.3 516C 296.8 511.8 297.1 504.8 293.8 501.3C 290.8 498.1 283.9 498.2 275.7 501.6C 267.4 505 262.4 505.2 259.9 502.1C 256.3 497.7 258.4 491.8 264 490.7C 265.7 490.3 270.5 490.7 274.8 491.5C 286.2 493.7 288.4 493.5 291.4 490C 294.2 486.6 295.6 481.4 294.5 478C 294.1 476.8 292.5 474.3 290.8 472.4C 286.8 467.8 284.2 468 270.8 473.6C 264 476.5 259 478 257.5 477.7C 255.3 477.3 255 477.6 255 480.5C 255 486.1 248.6 492 242.5 492L 240 492L 242.3 496.7C 245.6 503.4 246.3 508.7 244.5 514.7C 240.7 527.6 224.5 533.2 207.7 527.4C 202.4 525.6 197.2 520.8 193.3 514.2C 191.2 510.6 190.8 509 191.2 504.3C 191.6 499.7 192.2 498.2 194.5 496.2C 196.9 494.2 198.1 493.9 202.2 494.2C 208.9 494.9 212.4 498.2 211.6 503C 210.2 510.6 210.4 511.3 213.6 513.2C 218.4 516 225.6 516.7 228 514.5C 230.9 511.9 230.7 504.4 227.7 499.9C 225.7 496.9 224.2 496.2 216.1 493.8C 211 492.4 205.9 490.4 204.8 489.3C 197.4 482.6 198.1 467.7 206.2 460.4C 211.8 455.3 216 453.9 225.1 454.3C 232.1 454.7 234.8 455.3 240.3 457.9z",
  "M 325.7 65.7C 325.3 67.9 323.8 70.7 321.8 72.7L 318.5 76.1L 320.8 78.1C 329.4 85 344.7 80.2 343.8 70.9C 343.5 67.6 343.2 67.4 335.5 64.8C 331.1 63.4 327.2 62.0999 326.9 62.0999C 326.5 61.9999 326 63.6 325.7 65.7z",
  "M 193.5 40.9C 191.3 41.9 188.4 44 187 45.4C 184.7 47.9 184.5 49.1 184.2 58C 183.7 72 186.1 79.3 194 87.2C 199 92.3 200.2 93 203.6 93C 208.1 93 210.5 91.6 217.3 85.1C 223.3 79.3 225.6 72.7 224.6 63.4C 223.9 56.2 221.7 49.5 219.2 46.6C 218.3 45.6 215.5 43.4 213.1 41.8C 207.6 38.4 199.8 38 193.5 40.9z",
];
