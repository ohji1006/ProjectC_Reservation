package kr.or.connect.reservation.sql;

public class DisplayInfoSql {
	public final static String SELECT_DISPLAY_INFO =
			"select di.product_id, ct.id as categoryId, di.id as displayInfoId, ct.name as categoryName, pd.description as productDescription, pd.content as productContent, pd.event as productEvent, di.opening_hours as openingHours, di.place_name as placeName, di.place_lot as placeLot, di.place_street as placeStreet, di.tel as telephone, di.homepage as homepage, di.email as email, di.create_date as createDate, di.modify_date as modifyDate " + 
			"from display_info as di " + 
			"join product as pd on pd.id = di.product_id " + 
			"join category as ct on pd.category_id = ct.id " + 
			"where di.id = :displayInfoId";
	
	public final static String SELECT_PRODUCT_IMAGE = 
			"select di.product_id as productId, pi.id as productImageId, pi.type as type, fi.id as fileInfoId, fi.file_name as fileName, fi.save_file_name as saveFileName, fi.content_type as contentType, fi.delete_flag as deleteFlag, fi.create_date as createDate, fi.modify_date as modifyDate " + 
			"from display_info as di " + 
			"join product as pd on pd.id = di.product_id " + 
			"join product_image as pi on pi.product_id = pd.id " + 
			"join file_info as fi on fi.id = pi.file_id " + 
			"where di.id = :displayInfoId and (type = 'ma' or type = 'et') " +
			"limit :limit";
	
	public final static String SELECT_DISPLAY_INFO_IMAGE = 
			"select di_image.id as displayInfoImageId, di.id as displayInfoId, fi.id as fileId, fi.file_name as fileName, fi.save_file_name as saveFileName, fi.content_type as contentType, fi.delete_flag as deleteFlag, fi.create_date as createDate, fi.modify_date as modifyDate " + 
			"from display_info as di " + 
			"join display_info_image as di_image on di_image.display_info_id = di.id " + 
			"join file_info as fi on fi.id = di_image.file_id " + 
			"where di.id = :displayInfoId";
	
	public final static String SELECT_PRODUCT_PRICE = 
			"select pp.id as productPriceId, pd.id as productId, pp.price_type_name as priceTypeName, pp.price as price, pp.discount_rate as discountRate, pp.create_date as createDate, pp.modify_date as modifyDate " + 
			"from display_info as di " + 
			"join product as pd on di.product_id  = pd.id " + 
			"join product_price as pp on pp.product_id = pd.id " + 
			"where pd.id = :displayInfoId " + 
			"order by pp.id desc";
	
	public final static String SELECT_COMMENT = 
			"select ruc.id as commentId, pd.id as productId, ruc.reservation_info_id as reservationInfoId, ruc.score as score, " + 
			"ruc.comment as comment, ri.reservation_name as reservationName, ri.reservation_tel as reservationTelephone, " + 
			"ri.reservation_email as reservationEmail, ri.reservation_date as reservationDate, ruc.create_date as createDate, ruc.modify_date as modifyDate " + 
			"from display_info as di " + 
			"join product as pd on pd.id = di.product_id " + 
			"join reservation_user_comment as ruc on ruc.product_id = pd.id " + 
			"join reservation_info as ri on ri.id = ruc.reservation_info_id " + 
			"where di.id = :displayInfoId " + 
			"order by ruc.id desc";

	public final static String SELECT_COMMENT_IMAGE = 
			"select ruci.id as imageId, ruci.reservation_info_id as reservationInfoId, ruci.reservation_user_comment_id as reservationUserCommentId, " + 
			"fi.id as fileId, fi.file_name as fileName, fi.save_file_name as saveFileName, fi.content_type as contentType, " + 
			"fi.delete_flag as deleteFlag, fi.create_date as createDate, fi.modify_date as modifyDate " + 
			"from reservation_user_comment as ruc " + 
			"join reservation_user_comment_image as ruci on ruci.reservation_user_comment_id = ruc.id " + 
			"join file_info as fi on fi.id = ruci.file_id " + 
			"where ruc.id = :userCommnetId";
	
	public final static String SELECT_SCORE = 
			"select ruc.score as score " + 
			"from display_info as di " + 
			"join product as pd on pd.id = di.product_id " + 
			"join reservation_user_comment as ruc on ruc.product_id = pd.id " + 
			"where di.id = :displayInfoId ";
}
