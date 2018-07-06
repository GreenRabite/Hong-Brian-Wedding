class Api::InvitesController < ApplicationController
  def index
    @invites = Invite.all
    render :index
  end

  def show
    @invite = Invite.find_by(id: params[:id])
    render :show
  end

  def update
    @invite = Invite.find_by(id: params[:id])
    if @invite
      if @invite.update(invite_params)
        render :show
      else
        render json: @invite.errors.full_messages, status: 422
      end
    else
      render json: ["Could not find invite"], status: 404
    end
  end

  private
  def invite_pwarams
    params.require(:invite).permit(:username, :attending, :capacity, :plusone)
  end
end
