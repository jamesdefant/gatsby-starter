class Link {

  constructor(
    readonly label : string,
    readonly url : string,
    readonly isProtected : boolean = false
  ) {}
}

export { Link }