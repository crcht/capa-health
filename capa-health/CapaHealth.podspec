
  Pod::Spec.new do |s|
    s.name = 'CapaHealth'
    s.version = '0.0.1'
    s.summary = 'capacitor health data'
    s.license = 'MIT'
    s.homepage = 'https://github.com/crcht/capa-health'
    s.author = 'Theo Creach'
    s.source = { :git => 'https://github.com/crcht/capa-health', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end