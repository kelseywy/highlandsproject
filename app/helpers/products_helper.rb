module ProductsHelper
  def add_property_link(name)
  link_to_function name do |page|
  page.insert_html :bottom, :properties, :partial => 'property', :object => Property.new
  end
  end
end
