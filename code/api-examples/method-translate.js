require('seneca')()

  // Translate patterns from one namespace to another
  // role:foo,cmd:save -> role:bar,cmd:save
  .translate('role:foo', 'role:bar')

  // Rewrite patterns for internal services, inlcuding and exluding properties explicitly
  // app:foo,cmd:bar,color:red,size:1 -> service:zed,cmd:bar,color:red  # size is dropped
  .translate('app:foo,cmd:bar', 'service:zed,cmd:bar', '-app,color')
