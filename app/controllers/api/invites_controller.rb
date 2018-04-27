class Api::InvitesController < ApplicationController
  def index
    @invites = Invite.all
    render :index
  end

  def show
    @invite = Invite.find_by(id: params[:id])
    render :show
  end
end
