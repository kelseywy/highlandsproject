class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all
    gon.products = @products
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
      @product.properties.build.product_properties.build
  end

  def create
    @product = Product.new(product_params)


    respond_to do |format|
      if @product.save
        format.html { redirect_to products_path, notice: 'Product was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  private
  def set_product
      @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :upc, :available_on,
     properties_attributes: [:id, :name, :_destroy,
        product_properties_attributes: [:id, :value, :_destroy]
        ])
  end
end
