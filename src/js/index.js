function getCook(cookiename) {
  var cookiestring = new RegExp("" + cookiename + "[^;]+").exec(document.cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
}

var stripe = Stripe('pk_live_7I6n4zR24h6aSCpEcSo3dOz8')
var cookieValue = getCook('profile')

if (!cookieValue || cookieValue === '') location.href = '/login.html'

document.getElementById('loader').classList.add('loading')

fetch('https://data.proux.net', {credentials: 'include'})
  .then(function (result) { return result.json() })
  .then(function (result) {
    document.getElementById('loader').classList.remove('loading')

    var paymentList = document.getElementById('paymentList')
    var invoiceList = document.getElementById('invoiceList')

    result.domains.map(function (domain) {
      domain.text = domain.name
      domain.tags = ['<span class="fa fa-globe"></span>']
      domain.nodes = []

      if (domain.mailboxes) {
        var mailbox = {
          text: 'Mail',
          tags: ['<span class="fa fa-envelope"></span>'],
          nodes: domain.mailboxes
        }
        mailbox.nodes.map(function (domain) {
          domain.text = domain.mail
          domain.tags = ['<span class="fa fa-' + domain.type + '"></span>']
          if (domain.plan === 'MAIL') {
            domain.tags.push('1 GB')
          }
          if (domain.plan === 'MAILXL') {
            domain.tags.push('5 GB')
          }
          if (domain.plan === 'MAILXXL') {
            domain.tags.push('25 GB')
          }
          if (domain.type === 'forward') {
            if (domain.mail.charAt(0) === '@')
              domain.text = '*' + domain.text
            domain.text += ' <small>to ' + domain.forwards.join(', ') + '</small>'
          }
          return domain
        })
        mailbox.nodes.push({
          text: '<i>Mailbox / Weiterleitung hinzufügen</i>',
          icon: 'fa fa-plus'
        })
        domain.nodes.push(mailbox)

      }

      return domain
    })

    $('#tree').treeview({
      data: result.domains,
      levels: 1,
      enableLinks: true,
      collapseIcon: 'fa fa-angle-down',
      expandIcon: 'fa fa-angle-right',
      showTags: true,
      selectedBackColor: '#F5F5F5',
      selectedColor: '#555'
    })
      .on('nodeSelected', function (event, data) {
        console.log(event, data)
        $("#myModal").modal()
      })

    $('[data-toggle="tooltip"]').tooltip()

    result.invoices.data.forEach(function (item) {
      if (item.receipt_number) {
        var invoiceElement = document.createElement('div')
        invoiceElement.innerHTML = item.receipt_number
        invoiceElement.classList.add('list-group-item')
        invoiceElement.classList.add('clearfix')
        invoiceList.appendChild(invoiceElement)
      }
    })

    result.sources.data.forEach(function (item) {
      var paymentElement = document.createElement('div')
      paymentElement.classList.add('list-group-item')
      paymentElement.classList.add('clearfix')
      if (item.object === 'card') {
        paymentElement.innerHTML = '&nbsp;**** **** **** ' + item.last4
        var ccElement = document.createElement('span')
        switch (item.brand) {
          case 'Visa':
            ccElement.className = 'pf pf-visa'
            break
          case 'American Express':
            ccElement.className = 'pf pf-american-express'
            break
          case 'MasterCard':
            ccElement.className = 'pf pf-mastercard-alt'
            break
          case 'Discover':
            ccElement.className = 'pf pf-discover'
            break
          case 'JCB':
            ccElement.className = 'pf pf-jcb'
            break
          case 'Diners Club':
            ccElement.className = 'pf pf-diners'
            break
          default:
            ccElement.className = 'pf pf-credit-card'
        }

        paymentElement.prepend(ccElement)
      } else if (item.object === 'source') {
        if (item.type === 'sepa_debit') {
          paymentElement.innerHTML = '&nbsp;' + item.sepa_debit.country + '** **** **** **** ' + item.sepa_debit.last4
          var sepaElement = document.createElement('span')
          sepaElement.className = 'pf pf-sepa'
          paymentElement.prepend(sepaElement)
        }
      }

      var rightContext = '<span class="pull-right">'
      if (item.id === result.default_source) {
        rightContext += '<span class="badge">standard</span>'
      }
      rightContext += '<button class="btn btn-xs btn-link" data-placement="right" data-toggle="tooltip" title="Löschen">\n' +
        '<span class="fa fa-trash"></span></button></span>'
      paymentElement.innerHTML = paymentElement.innerHTML + rightContext
      paymentList.appendChild(paymentElement)
    })
    $('[data-toggle="tooltip"]').tooltip()
    paymentList.classList.add('list-group')
    var elements = stripe.elements()

    var card = elements.create('card', {
      style: {
        base: {
          color: '#555',
          lineHeight: '24px',
          fontFamily: '"Lato", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#b1b1b1'
          }
        },
        invalid: {
          color: '#d9534f'
        }
      },
      hidePostalCode: true,
      hideIcon: true,
      iconStyle: 'default',
      cssSrc: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic'
    })

    card.mount('#card-element')

    card.addEventListener('change', function (event) {
      document.getElementById('card-errors').textContent = (event.error) ? event.error.message : ''
    })

    document.getElementById('payment-form').addEventListener('submit', function (event) {
      event.preventDefault()

      stripe.createSource(card, { customer: result.id }).then(function (result) {
        if (result.error) {
          document.getElementById('card-errors').textContent = result.error.message
        } else {
          // console.log(result)
          // stripeTokenHandler(result.token)
        }
      });
    });

  }).catch(function () {
  location.href = '/login.html?login=error'
})

$('[data-toggle="tooltip"]').tooltip()